import { personalInfo, aboutMe } from '../../data/portfolioData';
import profileImage from '../../assets/images/profile.png';
import './About.css';

export const About = () => {
  return (
    <section id="about" className="about-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Introduction</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-desc">Get to know my academic background and interests.</p>
        </div>

        <div className="about-container">
          {/* Profile Photo Area */}
          <div className="about-image-wrapper reveal reveal-left">
            <div className="about-image-border">
              <img 
                src={profileImage} 
                alt={`${personalInfo.name} Profile`} 
                className="about-profile-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bio and Stats Area */}
          <div className="about-content reveal reveal-right">
            <h3 className="about-subtitle">Computer Science Engineering Student</h3>
            <p className="about-text">
              {aboutMe.paragraph}
            </p>

            <div className="stats-container">
              <div className="stat-box">
                <span className="stat-number">{personalInfo.stats.internshipsCount}</span>
                <span className="stat-label">Internships Completed</span>
              </div>

              <div className="stat-box">
                <span className="stat-number">{personalInfo.stats.skillsCount}</span>
                <span className="stat-label">Technical Skills</span>
              </div>

              <div className="stat-box">
                <span className="stat-number">CSE</span>
                <span className="stat-label">{personalInfo.stats.degreeLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
