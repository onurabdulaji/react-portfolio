import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "service_4jdjkzi",
        "template_hgndnxi",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "OA8ezGB6J6dLitzv6"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("success");
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Email error:", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="php-email-form"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="row gy-4">
        <div className="col-md-6">
          <label htmlFor="name-field" className="pb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name-field"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="email-field" className="pb-2">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email-field"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="subject-field" className="pb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject-field"
            className="form-control"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="message-field" className="pb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message-field"
            className="form-control"
            rows="10"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="col-md-12 text-center">
          {status === "loading" && <div className="loading">Sending...</div>}
          {status === "success" && (
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          )}
          {status === "error" && (
            <div className="error-message">
              Failed to send message. Please try again.
            </div>
          )}

          <button type="submit" disabled={status === "loading"}>
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
