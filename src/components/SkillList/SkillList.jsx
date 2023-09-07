import Skill from "./Skill/Skill";
import { skills } from "./data.js";

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <div key={index}>
          <Skill skill={skill} />
        </div>
      ))}
    </div>
  );
}

export default SkillList;
