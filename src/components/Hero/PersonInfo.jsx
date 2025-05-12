import React from "react";
import { personalInfo } from "../../data/personalInfo";

const PersonInfo = () => {
  return (
    <>
      <h2>Hi, i am {personalInfo.name}</h2>
    </>
  );
};

export default PersonInfo;
