import React from "react";
import { aboutInfo } from "../../Data/aboutData";

const AboutContent = () => {
  return (
    <>
      <h2>{aboutInfo.title}</h2>
      <p className="fst-italic py-3">{aboutInfo.description}</p>
    </>
  );
};

export default AboutContent;
