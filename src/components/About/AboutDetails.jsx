import React from "react";

const AboutDetails = ({ label, value }) => {
  return (
    <li>
      <i className="bi bi-chevron-right"></i>
      <strong>{label}:</strong> <span>{value}</span>
    </li>
  );
};

export default AboutDetails;
