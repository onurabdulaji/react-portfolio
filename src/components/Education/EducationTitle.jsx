import React from "react";
import { resumeEducation } from "../../Data/resumeeducationData";

const EducationTitle = () => {
  const { title } = resumeEducation;
  return <h4>{title}</h4>;
};

export default EducationTitle;
