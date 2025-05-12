import React from "react";
import Resumecontent from "./Resume/Resumecontent";
import EducationContent from "./Education/EducationContent";
import ExperienceMain from "./Experience/ExperienceMain";

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>My Resume</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Sumary</h3>
            <Resumecontent />
          </div>
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <EducationContent />
          </div>
          <ExperienceMain />
        </div>
      </div>
    </section>
  );
};

export default Resume;
