import PropTypes from 'prop-types';
import './Skills.css';

export const SkillCard = ({ name, category, icon }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon-wrapper">
        <span className="skill-icon" role="img" aria-label={name}>
          {icon}
        </span>
      </div>
      
      <div className="skill-info">
        <h3 className="skill-name">{name}</h3>
        <p className="skill-category">{category}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default SkillCard;
