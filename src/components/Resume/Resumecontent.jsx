import React from "react";
import ResumeContextDetails from "./ResumeContextDetails";
import { resumeInformation } from "../../Data/resumeData";
import ContentDescription from "./ContentDescription";
import ContentAddress from "./ContentAddress";
import ContentPhone from "./ContentPhone";
import { ContentEmail } from "./ContentEmail";

const ResumeContent = () => {
  const { title, address, phone, email, description } = resumeInformation;

  return (
    <div className="resume-item pb-0">
      <ResumeContextDetails title={title} />
      <ContentDescription description={description} />
      <ul>
        <ContentAddress address={address} />
        <ContentPhone phone={phone} />
        <ContentEmail email={email} />
      </ul>
    </div>
  );
};

export default ResumeContent;
