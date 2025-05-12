import React from "react";
import { GeoAlt, Telephone, Envelope } from "react-bootstrap-icons";

const ContactInfo = () => {
  return (
    <div className="info-wrap">
      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
        <GeoAlt className="flex-shrink-0" />
        <div>
          <h3>Address</h3>
          <p>Ul.Gorna Banjica</p>
        </div>
      </div>

      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
        <Telephone className="flex-shrink-0" />
        <div>
          <h3>Call Us</h3>
          <p>+389 76 441 204</p>
        </div>
      </div>

      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
        <Envelope className="flex-shrink-0" />
        <div>
          <h3>Email Us</h3>
          <p>onurabdulaji@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
