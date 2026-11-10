import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToHome = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer reveal">
      <div className="container footer-container">
        <div className="footer-top">
          <a href="#home" onClick={handleScrollToHome} className="footer-logo">
            {personalInfo.name}
          </a>
          <p className="footer-sub">{personalInfo.role}</p>
        </div>

        <div className="footer-middle">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-link"
            aria-label="GitHub Profile"
          >
            <FaGithub /> GitHub
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-link"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} {personalInfo.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
