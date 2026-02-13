import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="project-card fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-overlay">
          <div className="project-links">
            <a
              href={project.github}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <FiGithub />
            </a>
            <a
              href={project.live}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;