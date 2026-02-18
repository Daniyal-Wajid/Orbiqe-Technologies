const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
    createProject,
    getProjects,
    getProjectById,
    deleteProject
} = require("../controllers/projectController");
// const { verifyAdmin } = require("../middleware/authMiddleware"); // TODO: Implement and uncomment

// Multer Config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

router.post("/", upload.array("media", 10), createProject); // VerifyAdmin should be here
router.get("/", getProjects);
router.get("/:id", getProjectById);
router.delete("/:id", deleteProject); // VerifyAdmin should be here

module.exports = router;
