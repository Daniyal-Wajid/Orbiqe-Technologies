import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // ✅ navigate defined here
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/projects/${id}`);
                if (res.data && (res.data._id || res.data.id)) {
                    setProject(res.data);
                    if (res.data.media && res.data.media.length > 0) {
                        setSelectedImage(res.data.media[0]);
                    }
                } else {
                    console.error("Invalid project data received:", res.data);
                    setProject(null);
                }
            } catch (error) {
                console.error("Error fetching project details", error);
                setProject(null);
            } finally {
                setLoading(false);
            }
        };
        fetchProject();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-24 text-gray-500 dark:text-gray-400">
                Project not found.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)} // ✅ navigate used correctly
                    className="mb-8 flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Projects
                </button>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">

                    {/* Main Content Grid */}
                    <div className="lg:grid lg:grid-cols-2">

                        {/* Media Gallery */}
                        <div className="p-6 lg:p-8 bg-gray-100 dark:bg-gray-900/50">
                            {/* Main Display Image */}
                            <div className="aspect-w-16 aspect-h-9 mb-4 rounded-xl overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700">
                                {selectedImage ? (
                                    selectedImage.type === 'video' ? (
                                        <video src={`http://localhost:5000${selectedImage.url}`} controls className="w-full h-full object-cover" />
                                    ) : (
                                        <img src={`http://localhost:5000${selectedImage.url}`} alt={project.title} className="w-full h-full object-contain" />
                                    )
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400">No Media Available</div>
                                )}
                            </div>

                            {/* Thumbnails */}
                            {project.media && project.media.length > 1 && (
                                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                    {project.media.map((media, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => setSelectedImage(media)}
                                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${selectedImage === media ? 'border-indigo-600' : 'border-transparent hover:border-gray-400'}`}
                                        >
                                            {media.type === 'video' ? (
                                                <div className="w-full h-full bg-black flex items-center justify-center">
                                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                                    </svg>
                                                </div>
                                            ) : (
                                                <img src={`http://localhost:5000${media.url}`} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Details */}
                        <div className="p-8 lg:p-12">
                            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">{project.title}</h1>
                            <div className="prose prose-indigo dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>{project.description}</p>
                            </div>

                            {/* Tag / Metadata */}
                            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Project Reference ID: {project?._id?.slice(-6).toUpperCase() || id.slice(-6).toUpperCase()}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
