import React from "react";
import Typewriter from "typewriter-effect";
import { personalInfo } from "../../data/personalInfo";

const TypedText = () => {
  return (
    <span className="typed">
      <Typewriter
        className="typed-cursor typed-cursor--blink"
        options={{
          strings: personalInfo.jobTitles,
          autoStart: true,
          loop: true,
          delay: 115,
        }}
      />
    </span>
  );
};

export default TypedText;
