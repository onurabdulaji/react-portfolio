import React from "react";
import { resumeEducation } from "../../Data/resumeeducationData";

const EducationPlace = () => {
  const { placeandname } = resumeEducation;
  return (
    <p>
      <em>{placeandname}</em>
    </p>
  );
};

export default EducationPlace;
