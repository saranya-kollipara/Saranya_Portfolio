import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaBars, FaTimes, FaSun, FaMoon, FaLaptop } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import './Navbar.css';

export const Navbar = ({ currentTheme, onChangeTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu when link is clicked
  const closeMenu = () => setIsOpen(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Cycle theme: light -> dark -> system -> light
  const handleCycleTheme = () => {
    if (currentTheme === 'light') {
      onChangeTheme('dark');
    } else if (currentTheme === 'dark') {
      onChangeTheme('system');
    } else {
      onChangeTheme('light');
    }
  };

  // Get theme toggle icon and text description
  const getThemeToggleInfo = () => {
    switch (currentTheme) {
      case 'light':
        return { icon: <FaSun />, label: 'Theme: Light (Switch to Dark)' };
      case 'dark':
        return { icon: <FaMoon />, label: 'Theme: Dark (Switch to System)' };
      case 'system':
      default:
        return { icon: <FaLaptop />, label: 'Theme: System (Switch to Light)' };
    }
  };

  const themeInfo = getThemeToggleInfo();

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Education', target: 'education' },
    { label: 'Skills', target: 'skills' },
    { label: 'Internships', target: 'internships' },
    { label: 'Projects', target: 'projects' },
    { label: 'Contact', target: 'contact' },
    ...(personalInfo.resumeUrl ? [{ label: 'Resume', target: 'resume', isExternal: true, path: personalInfo.resumeUrl }] : [])
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container container">
        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, idx) => (
            <li key={idx} className="nav-item">
              {item.isExternal ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-links resume-nav-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  href={`#${item.target}`}
                  className="nav-links"
                  onClick={(e) => handleScrollToSection(e, item.target)}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar-actions-wrapper">
          {/* Theme Cycler Button */}
          <button 
            type="button" 
            className="theme-toggle-btn" 
            onClick={handleCycleTheme} 
            aria-label={themeInfo.label}
            title={themeInfo.label}
          >
            {themeInfo.icon}
          </button>

          {/* Hamburger Icon */}
          <button 
            className="nav-toggle" 
            onClick={toggleMenu} 
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  onChangeTheme: PropTypes.func.isRequired
};

export default Navbar;
