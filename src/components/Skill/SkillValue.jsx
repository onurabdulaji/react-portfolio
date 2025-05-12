import React from "react";
import CountUp from "react-countup";

const SkillValue = ({ progress }) => {
  return (
    <i className="val">
      <CountUp start={0} end={progress} duration={0.8} />
    </i>
  );
};

export default SkillValue;
