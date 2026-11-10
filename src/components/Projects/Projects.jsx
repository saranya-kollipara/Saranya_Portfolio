import { projects } from '../../data/portfolioData';
import ProjectCard from './ProjectCard';
import './Projects.css';

export const Projects = () => {
  return (
    <section id="projects" className="projects-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">My Projects</h2>
          <p className="section-desc">A selection of software and database systems I have built.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              liveDemo={project.liveDemo}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
