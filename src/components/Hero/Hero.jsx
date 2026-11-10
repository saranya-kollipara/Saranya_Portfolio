import { FaGithub, FaLinkedin, FaArrowRight, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

export const Hero = () => {
  // Smooth scroll helper
  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Subtle abstract floating background shapes for premium aesthetics */}
      <div className="hero-shape shape-1 animate-float"></div>
      <div className="hero-shape shape-2 animate-pulse"></div>

      <div className="hero-container container">
        <div className="hero-content">
          <span className="hero-greeting animate-fade-up" style={{ animationDelay: '0.1s' }}>{personalInfo.tagline}</span>
          <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.2s' }}>{personalInfo.name}</h1>
          <h2 className="hero-subtitle animate-fade-up" style={{ animationDelay: '0.3s' }}>{personalInfo.subTitle}</h2>
          
          <p className="hero-description animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {personalInfo.bio}
          </p>

          <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a 
              href="#projects" 
              className="btn btn-primary"
              onClick={(e) => handleScrollToSection(e, 'projects')}
            >
              View My Projects <FaArrowRight className="btn-icon-right" />
            </a>
            {personalInfo.resumeUrl && (
              <a 
                href={personalInfo.resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                <FaDownload /> Resume
              </a>
            )}
            <a 
              href="#contact" 
              className="btn btn-secondary"
              onClick={(e) => handleScrollToSection(e, 'contact')}
            >
              Contact Me
            </a>
          </div>

          <div className="hero-socials animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link" 
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link" 
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
