import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import ClientsData from "./Home/Clients/ClientsData"; // Import static client data for stats

const AdminDashboard = () => {
    const { user } = useAuth();
    const [projects, setProjects] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/projects");
            setProjects(res.data);
        } catch (error) {
            console.error("Error fetching projects", error);
        }
    };

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        for (let i = 0; i < files.length; i++) {
            formData.append("media", files[i]);
        }

        try {
            await axios.post("http://localhost:5000/api/projects", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setTitle("");
            setDescription("");
            setFiles([]);
            fetchProjects();
            alert("Project created successfully!");
        } catch (error) {
            console.error("Error creating project", error);
            alert("Failed to create project");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this project?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/projects/${id}`);
            fetchProjects();
        } catch (error) {
            console.error("Error deleting project", error);
        }
    };

    // Calculate Real Stats
    const totalProjects = projects.length;
    // Calculate total media files uploaded across all projects
    const totalMedia = projects.reduce((acc, curr) => acc + (curr.media ? curr.media.length : 0), 0);
    // Count total clients from the imported data file
    const activeClients = ClientsData.length;

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans transition-colors duration-300 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white pt-12">Dashboard</h1>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Welcome back, {user?.name}. Here's your live overview.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-10">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg border border-gray-100 dark:border-gray-700">
                        <div className="px-4 py-5 sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Total Projects</dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">{totalProjects}</dd>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg border border-gray-100 dark:border-gray-700">
                        <div className="px-4 py-5 sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Total Media Assets</dt>
                            <dd className="mt-1 text-3xl font-semibold text-indigo-600 dark:text-indigo-400">{totalMedia}</dd>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg border border-gray-100 dark:border-gray-700">
                        <div className="px-4 py-5 sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Trusted Clients</dt>
                            <dd className="mt-1 text-3xl font-semibold text-green-600 dark:text-green-400">{activeClients}</dd>
                        </div>
                    </div>
                </div>

                <div className="md:grid md:grid-cols-3 md:gap-8">
                    {/* Upload Form */}
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Push New Project</h3>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Upload detailed information about your latest engineering feats.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleSubmit} className="shadow-lg sm:rounded-md sm:overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 mb-10">
                            <div className="px-4 py-5 space-y-6 sm:p-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Title</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 dark:text-white p-2 border"
                                        placeholder="e.g. Solar Power Grid Alpha"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                                    <textarea
                                        rows={3}
                                        className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-50 dark:bg-gray-700 dark:text-white p-2 border"
                                        placeholder="Detailed project summary..."
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Media</label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 focus-within:outline-none">
                                                    <span>Upload files</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple onChange={handleFileChange} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {files.length > 0 && <p className="text-sm text-green-600 mt-2">{files.length} files selected</p>}
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
                                >
                                    {loading ? "Saving..." : "Save Project"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 my-10"></div>

                {/* Projects List */}
                <div className="md:grid md:grid-cols-3 md:gap-8">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Portfolio Management</h3>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">View and manage your existing project showcase.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="bg-white dark:bg-gray-800 shadow-lg overflow-hidden sm:rounded-lg border border-gray-100 dark:border-gray-700">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                {projects.map((project) => (
                                    <li key={project._id} className="px-6 py-5 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors flex items-center justify-between group">
                                        <div className="flex-1 min-w-0 pr-4">
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate mt-1">{project.description}</p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => handleDelete(project._id)}
                                                className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all"
                                            >
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </li>
                                ))}
                                {projects.length === 0 && <li className="px-6 py-10 text-center text-gray-500 dark:text-gray-400">No projects found. Use the form above to add one!</li>}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;
