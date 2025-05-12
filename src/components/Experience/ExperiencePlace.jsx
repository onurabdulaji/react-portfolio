import React from "react";
import { resumeExperience } from "../../Data/resumeExperienceData";
const ExperiencePlace = () => {
  const { place } = resumeExperience;
  return (
    <p>
      <em>{place}</em>
    </p>
  );
};

export default ExperiencePlace;
