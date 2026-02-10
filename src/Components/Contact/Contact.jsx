import React, { useState } from "react";
import "./Contact.css";
import theme_pattren from "../../assets/theme_pattern.svg";
import mail from "../../assets/mail1.png";
import location from "../../assets/location1.png";
import call from "../../assets/call1.png";

let mail_address = "shale.jafor@gmail.com";
let location_address = "Charail, Keranigonj, Dhaka-1310";
let phone_number = "+880 157-021-6510";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "d8483580-c333-4165-837c-3c520b2fe0a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");

    if (data.success) {
      alert("✅ Message sent successfully!");
      event.target.reset(); // clear form after submit
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattren} alt="theme pattern for contact" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I’m currently open to new projects and collaborations. If you have
            an idea, a project, or any work you’d like help with, feel free to
            reach out. I’m always happy to discuss how I can contribute and
            bring value to your project. You can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="mail address" />
              <p>{mail_address}</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="home address" />
              <p>{location_address}</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="phone" />
              <p>{phone_number}</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />

          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your email" name="email" />

          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
