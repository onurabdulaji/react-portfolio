import React from "react";

const ProgressBar = ({ progress, label }) => {
  return (
    <div className="progress-bar-wrap">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`${label} skill level`}
        style={{
          width: `${progress}%`,
          transition: "width 0.2s ease-in-out",
        }}
      />
    </div>
  );
};

export default ProgressBar;
