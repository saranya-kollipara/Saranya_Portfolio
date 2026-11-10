import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Internships from './components/Internships/Internships';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import useScrollReveal from './hooks/useScrollReveal';
import { themeConfig } from './data/portfolioData';

// Importing core styling framework
import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';
import './styles/responsive.css';
import './App.css';

function App() {
  // Activate scroll-reveal observations
  useScrollReveal();

  // Initialize theme state from local storage, fallback to config option
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || themeConfig.initialTheme || 'system';
  });

  // Handle theme logic updates on data-theme attribute
  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (themeMode) => {
      if (themeMode === 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
      } else {
        root.setAttribute('data-theme', themeMode);
      }
    };

    applyTheme(theme);
    localStorage.setItem('portfolio-theme', theme);

    // Listen for OS system theme changes dynamically
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleMediaChange = () => {
        applyTheme('system');
      };

      mediaQuery.addEventListener('change', handleMediaChange);
      return () => {
        mediaQuery.removeEventListener('change', handleMediaChange);
      };
    }
  }, [theme]);

  return (
    <div className="app">
      <Navbar currentTheme={theme} onChangeTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Internships />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
