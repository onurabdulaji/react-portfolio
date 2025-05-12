import React from "react";
import Typewriter from "typewriter-effect";
import PersonInfo from "./PersonInfo";
import TypedText from "./TypedText";

const HeroContent = () => {
  return (
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <PersonInfo />
      <div className="typed typed-cursor typed-cursor--blink">
        I'm
        <span className="typed">
          <TypedText />
        </span>
      </div>
    </div>
  );
};

export default HeroContent;
