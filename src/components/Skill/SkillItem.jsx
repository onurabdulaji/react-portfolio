import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import SkillValue from "./SkillValue";

const SkillItem = ({ name, value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= value) {
          clearInterval(interval);
          return value;
        }
        return Math.min(oldProgress + 1, value);
      });
    }, 25);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="col-lg-12">
      <div className="progress">
        <span className="skill">
          <span>{name}</span>
          <SkillValue progress={progress} />
        </span>
        <ProgressBar progress={progress} label={name} />
      </div>
    </div>
  );
};

export default SkillItem;
