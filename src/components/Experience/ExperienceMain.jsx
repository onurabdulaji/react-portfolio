import React from "react";
import ExperienceTitle from "./ExperienceTitle";
import ExperienceYears from "./ExperienceYears";
import ExperiencePlace from "./ExperiencePlace";
import ExperienceDescPoint from "./ExperienceDescPoint";

const ExperienceMain = () => {
  return (
    <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
      <h3 className="resume-title">Professional Experience</h3>
      <div className="resume-item">
        <ExperienceTitle />
        <ExperienceYears />
        <ExperiencePlace />
        <ExperienceDescPoint />
      </div>
    </div>
  );
};

export default ExperienceMain;
