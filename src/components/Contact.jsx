import React from "react";
import ContactInfo from "./Contact/ContactInfo";
import ContactForm from "./Contact/ContactForm";
import MapEmbed from "./Contact/MapEmbed";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Let's work together! You can reach me via the form below.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <ContactInfo />
            <MapEmbed />
          </div>

          <div className="col-lg-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
