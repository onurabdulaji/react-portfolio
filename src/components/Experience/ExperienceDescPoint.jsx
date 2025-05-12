import React from "react";
import { resumeExperience } from "../../Data/resumeExperienceData";

const ExperienceDescPoint = () => {
  const { descriptionPoints } = resumeExperience;
  return (
    <ul>
      {descriptionPoints && descriptionPoints.length > 0 ? (
        descriptionPoints.map((description, index) => (
          <li key={index}>{description}</li>
        ))
      ) : (
        <li>Açıklama noktası bulunamadı.</li>
      )}
    </ul>
  );
};

export default ExperienceDescPoint;
