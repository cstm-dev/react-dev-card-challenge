import PropTypes from "prop-types";

function Skill({ skill }) {
  Skill.propTypes = {
    skill: PropTypes.object,
  };

  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.name}</span>
      <span>{skill.level}</span>
    </div>
  );
}

export default Skill;
