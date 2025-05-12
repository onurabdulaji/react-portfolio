import React from "react";

const MapEmbed = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.8476645793315!2d21.428012515745217!3d41.99812977921792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415b3b1d57d27%3A0x68d970d4735469d0!2sSkopje%2C%20North%20Macedonia!5e0!3m2!1sen!2smk!4v1715503076690!5m2!1sen!2smk"
      style={{ border: 0, width: "100%", height: "270px" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Skopje Map"
    ></iframe>
  );
};

export default MapEmbed;
