import { skills } from '../../data/portfolioData';
import SkillCard from './SkillCard';
import './Skills.css';

export const Skills = () => {
  return (
    <section id="skills" className="skills-section reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-desc">My core programming languages and technical fundamentals.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <SkillCard
              key={idx}
              name={skill.name}
              category={skill.category}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
