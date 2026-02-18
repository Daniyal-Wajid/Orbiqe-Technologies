import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ import useNavigate
import ProjectCard from '../../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate(); // ✅ define navigate here

  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);
    } catch (error) {
      console.error("Error fetching projects", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 pt-32 md:pt-60 transition-colors duration-300'>
      <header className='text-center mb-12'>
        <h1 className='text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl'>Our Projects</h1>
        <p className='mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400'>
          Discover the projects we've completed, showcasing our expertise and innovation.
        </p>
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <section className='max-w-7xl mx-auto'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project._id}
                onClick={() => navigate(`/projects/${project._id}`)}
                className="cursor-pointer"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          {projects.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-10">No projects to display yet.</p>
          )}
        </section>
      )}

      <section className='bg-indigo-700 dark:bg-indigo-900 rounded-lg shadow-xl mt-16 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
          <span className='block'>Want to Learn More?</span>
        </h2>
        <p className='mt-4 text-lg leading-6 text-indigo-200'>
          Get in touch with us to find out more about our projects and how we can help you.
        </p>
        <a
          href='/contact'
          className='mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto shadow-md hover:shadow-lg transition-all'
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Projects;
