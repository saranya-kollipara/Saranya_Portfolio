import PropTypes from 'prop-types';
import { FaBuilding, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import './Internships.css';

export const InternshipCard = ({ company, role, duration, details }) => {
  return (
    <div className="internship-card">
      <div className="internship-header">
        <div className="internship-company-info">
          <div className="company-icon-frame">
            <FaBuilding />
          </div>
          <div>
            <h3 className="internship-company">{company}</h3>
            <h4 className="internship-role">
              <FaBriefcase className="card-inline-icon" /> {role}
            </h4>
          </div>
        </div>
        
        <div className="internship-duration-chip">
          <FaCalendarAlt className="card-inline-icon" /> {duration}
        </div>
      </div>

      <div className="internship-divider"></div>

      <ul className="internship-details-list">
        {details.map((detail, idx) => (
          <li key={idx} className="internship-detail-item">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

InternshipCard.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default InternshipCard;
