import PropTypes from "prop-types";

function Skill(props) {
  Skill.propTypes = {
    skill: PropTypes.object,
  };

  return (
    <div className="skill" style={{ backgroundColor: props.skill.color }}>
      <span>{props.skill.name}</span>
      <span>{props.skill.level}</span>
    </div>
  );
}

export default Skill;
