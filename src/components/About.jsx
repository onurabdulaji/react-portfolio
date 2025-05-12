import React from "react";
import AboutLogo from "./About/AboutLogo";
import AboutContent from "./About/AboutContent";
import AboutDetails from "./About/AboutDetails";
import { aboutInformation } from "../Data/aboutInformationData";
import AboutText from "./About/AboutText";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>Information about myself.</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <AboutLogo />
          </div>
          <div className="col-lg-8 content">
            <AboutContent />
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <AboutDetails
                    label="Birthday"
                    value={aboutInformation.birthday}
                  />
                  <AboutDetails
                    label="Website"
                    value={aboutInformation.website}
                  />
                  <AboutDetails label="Phone" value={aboutInformation.phone} />
                  <AboutDetails label="City" value={aboutInformation.city} />
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <AboutDetails label="Age" value={aboutInformation.age} />
                  <AboutDetails
                    label="Degree"
                    value={aboutInformation.degree}
                  />
                  <AboutDetails label="Email" value={aboutInformation.email} />
                  <AboutDetails
                    label="Freelance"
                    value={aboutInformation.freelance}
                  />
                </ul>
              </div>
            </div>
            <AboutText />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
