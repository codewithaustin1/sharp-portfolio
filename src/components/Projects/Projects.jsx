import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { FiFilter } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'design', label: 'UI/UX' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      description: 'Mobile application for tracking workouts, nutrition, and progress with AI-powered recommendations.',
      tags: ['React Native', 'Firebase', 'TensorFlow.js'],
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      description: 'Interactive dashboard for visualizing financial data with real-time charts and predictive analytics.',
      tags: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 4,
      title: 'Travel Planning Tool',
      description: 'Web application for planning trips with itinerary management, budget tracking, and local recommendations.',
      tags: ['Next.js', 'TypeScript', 'Mapbox', 'Prisma'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 5,
      title: 'Design System Library',
      description: 'Comprehensive design system with reusable components, documentation, and accessibility guidelines.',
      tags: ['Figma', 'Storybook', 'React', 'Styled Components'],
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description: 'Scalable chat application with rooms, file sharing, and end-to-end encryption.',
      tags: ['Socket.io', 'React', 'Redis', 'Docker'],
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work showcasing technical expertise and creative solutions.
          </p>
        </div>

        <div className="projects-filters">
          <FiFilter className="filter-icon" />
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more? Check out my GitHub for additional projects and contributions.</p>
          <a href="https://github.com" className="btn" target="_blank" rel="noopener noreferrer">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;