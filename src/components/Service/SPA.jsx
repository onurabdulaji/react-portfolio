import React from "react";
import { Binoculars } from "react-bootstrap-icons";
import serviceData from "../../Data/serviceData";

const SPA = () => {
  const spa = serviceData.find(
    (service) => service.title === "Single Page Application (SPA) Development"
  );
  return (
    <div
      className="col-lg-4 col-md-6 service-item d-flex"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="icon flex-shrink-0">
        <Binoculars />
      </div>
      <div>
        <h4 className="title">
          <a href="service-details.html" className="stretched-link">
            {spa.title}
          </a>
        </h4>
        <p className="description">{spa.description}</p>
      </div>
    </div>
  );
};

export default SPA;
