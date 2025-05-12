import React from "react";
import EducationTitle from "./EducationTitle";
import EducatioYearFrom from "./EducatioYearFrom";
import EducationPlace from "./EducationPlace";

const EducationContent = () => {
  return (
    <>
      <h3 className="resume-title">Education</h3>
      <div className="resume-item">
        <EducationTitle />
        <EducatioYearFrom />
        <EducationPlace />
      </div>
    </>
  );
};

export default EducationContent;
