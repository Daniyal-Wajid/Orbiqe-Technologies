import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };
    fetchProjects();
  }, []);

  const settings = {
    dots: true,
    infinite: projects.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: '20px' } },
    ],
  };

  const getMediaUrl = (project) => {
    if (project.media && project.media.length > 0) {
      return `http://localhost:5000${project.media[0].url}`;
    }
    return "";
  };

  if (projects.length === 0) return null;

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className='text-sm md:text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase'>Portfolio</h2>
        <p className='mt-2 text-2xl md:text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
          Our Projects
        </p>
        <p className='mt-4 text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto'>
          Explore our portfolio showcasing a range of projects that highlight our expertise.
        </p>
      </div>

      <div className='max-w-7xl mx-auto'>
        <Slider {...settings} className="pb-8">
          {projects.map((project) => (
            <div key={project._id} className="p-4 focus:outline-none" onClick={() => navigate(`/projects/${project._id}`)}>
              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="h-48 w-full overflow-hidden relative">
                  {project.media && project.media.length > 0 && (
                    project.media[0].type === 'video' ? (
                      <video src={getMediaUrl(project)} className="w-full h-full object-cover" muted />
                    ) : (
                      <img src={getMediaUrl(project)} alt={project.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                    )
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">{project.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg shadow-md hover:shadow-xl transition-all"
        >
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
