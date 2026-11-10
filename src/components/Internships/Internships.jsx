import { internships } from '../../data/portfolioData';
import InternshipCard from './InternshipCard';
import './Internships.css';

export const Internships = () => {
  return (
    <section id="internships" className="internships-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Professional Experience</span>
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-desc">My practical training and industry exposure.</p>
        </div>

        <div className="internships-list">
          {internships.map((internship, idx) => (
            <InternshipCard
              key={idx}
              company={internship.company}
              role={internship.role}
              duration={internship.duration}
              details={internship.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
