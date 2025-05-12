// src/components/SocialLinks.jsx
import React from "react";
import { socialLinksData } from "../../Data/socialLink";

const SocialLinks = () => {
  return (
    <div className="social-links text-center">
      {socialLinksData.map((social) => (
        <a key={social.name} href={social.url} className={social.className}>
          <social.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
