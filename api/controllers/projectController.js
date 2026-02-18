const Project = require("../models/Project");
const fs = require("fs");
const path = require("path");

exports.createProject = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Process uploaded files
        const media = req.files.map(file => ({
            url: `/uploads/${file.filename}`,
            type: file.mimetype.startsWith("video") ? "video" : "image"
        }));

        const project = await Project.create({
            title,
            description,
            media
        });

        res.status(201).json(project);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating project" });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: "Error fetching projects" });
    }
};

exports.getProjectById = async (req, res) => {
    try {
        console.log("Fetching project with ID:", req.params.id);
        const project = await Project.findById(req.params.id);
        console.log("Database result:", project ? "Found" : "Not Found");
        if (!project) return res.status(404).json({ message: "Project not found" });
        res.json(project);
    } catch (err) {
        console.error("Error in getProjectById:", err);
        res.status(500).json({ message: "Error fetching project details" });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found" });

        // Delete associated files
        project.media.forEach(item => {
            const filePath = path.join(__dirname, "..", item.url);
            try {
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            } catch (err) {
                console.error(`Failed to delete file: ${filePath}`, err);
                // Continue deletion process even if file delete fails
            }
        });

        await project.remove();
        res.json({ message: "Project deleted" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting project" });
    }
};
