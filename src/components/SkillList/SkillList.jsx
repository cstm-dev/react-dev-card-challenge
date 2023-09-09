import Skill from "./Skill/Skill";
import { skills } from "./data.js";

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <Skill skill={skill} key={index} />
      ))}
    </div>
  );
}

export default SkillList;
