import React from "react";
import { resumeEducation } from "../../Data/resumeeducationData";

const EducatioYearFrom = () => {
  const { fromDate, toDate } = resumeEducation;
  return (
    <h5>
      {fromDate} - {toDate}
    </h5>
  );
};

export default EducatioYearFrom;
