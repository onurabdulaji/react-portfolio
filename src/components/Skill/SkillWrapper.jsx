import React from "react";
import SkillMainWrapper from "./SkillMainWrapper";
import { mySkills } from "../../Data/skillData";

const SkillWrapper = () => {
  return (
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <SkillMainWrapper skills={mySkills} />
    </div>
  );
};

export default SkillWrapper;
