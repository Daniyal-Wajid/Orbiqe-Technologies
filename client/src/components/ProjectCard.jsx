import React from "react";
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const getMediaUrl = (media) => {
        if (!media) return null;
        return `http://localhost:5000${media.url}`;
    };

    return (
        <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
                {project.media && project.media.length > 0 ? (
                    project.media[0].type === 'video' ? (
                        <video src={getMediaUrl(project.media[0])} className="absolute h-full w-full object-cover" muted />
                    ) : (
                        <img
                            className="absolute h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            src={getMediaUrl(project.media[0])}
                            alt={project.title}
                        />
                    )
                ) : (
                    <div className="absolute h-full w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400">
                        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 shadow-sm">
                    Featured
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 flex-1 leading-relaxed">{project.description}</p>
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <span className="text-xs text-gray-400 font-medium">Engineering</span>
                    <Link to="/contact" className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:underline">
                        Inquire &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
