import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

export const ProjectCard = ({ title, description, technologies, github, liveDemo, image }) => {
  return (
    <div className="project-card">
      {/* Image container with scale hover effect */}
      <div className="project-img-wrapper">
        <img 
          src={image} 
          alt={`${title} Preview`} 
          className="project-img"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/projects/project-1.jpg';
          }}
        />
      </div>
      
      {/* Content Details */}
      <div className="project-content">
        <h3 className="project-title-text">{title}</h3>
        <p className="project-description-text">{description}</p>
        
        {/* Clean Tech Tags */}
        <div className="project-tech-list">
          {technologies.map((tech, idx) => (
            <span key={idx} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="project-actions">
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-project btn-github"
            aria-label={`View ${title} on GitHub`}
          >
            <FaGithub /> GitHub
          </a>
          
          {liveDemo && (
            <a 
              href={liveDemo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-project btn-demo"
              aria-label={`View Live Demo of ${title}`}
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  github: PropTypes.string.isRequired,
  liveDemo: PropTypes.string,
  image: PropTypes.string.isRequired
};

export default ProjectCard;
