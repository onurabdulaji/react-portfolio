import React from "react";
import { resumeExperience } from "../../Data/resumeExperienceData";

const ExperienceYears = () => {
  const { fromDate, toDate } = resumeExperience;
  return (
    <h5>
      {fromDate} - {toDate}
    </h5>
  );
};

export default ExperienceYears;
