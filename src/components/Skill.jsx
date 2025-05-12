import React, { useEffect } from "react";
import AOS from "aos";
import SkillWrapper from "./Skill/SkillWrapper";
import { mySkills } from "../Data/skillData";

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // AOS'u başlatın ve animasyon süresini ayarlayın
  }, []);

  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Technology Stack</p>
      </div>
      {/* SkillWrapper'a skills prop'unu geçiyoruz */}
      <SkillWrapper skills={mySkills} />
    </section>
  );
};

export default Skill;
