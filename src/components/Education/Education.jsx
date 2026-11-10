import { education } from '../../data/portfolioData';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

export const Education = () => {
  return (
    <section id="education" className="education-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Academic Path</span>
          <h2 className="section-title">Education</h2>
          <p className="section-desc">My academic background and milestones.</p>
        </div>

        <div className="timeline-container">
          <div className="timeline">
            {education.map((item, idx) => (
              <div
                key={idx}
                className={`timeline-item ${idx % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
              >
                <div className="timeline-icon">
                  <FaGraduationCap />
                </div>

                <div className="timeline-card">
                  <span className="timeline-duration">{item.duration}</span>
                  <h3 className="timeline-degree">{item.degree}</h3>
                  <h4 className="timeline-institution">{item.institution}</h4>
                  <span className="timeline-location">{item.location}</span>
                  <span className="timeline-percentage">{item.percentage}</span>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
