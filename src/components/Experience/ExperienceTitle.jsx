import React from "react";
import { resumeExperience } from "../../Data/resumeExperienceData";

const ExperienceTitle = () => {
  const { title } = resumeExperience;
  return <h4>{title}</h4>;
};

export default ExperienceTitle;
