import React from "react";
import SkillItem from "./SkillItem";

const SkillMainWrapper = ({ skills }) => {
  return (
    <div className="row skills-content skills-animation">
      {skills.map((skill) => {
        return (
          <SkillItem key={skill.id} name={skill.name} value={skill.value} />
        );
      })}
    </div>
  );
};

export default SkillMainWrapper;
