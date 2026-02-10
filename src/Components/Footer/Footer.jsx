import React from "react";
import "./Footer.css";
import facebook_icon from "../../assets/facebook.png";
import instagram_icon from "../../assets/instagram.png";
import linkedin_icon from "../../assets/linkedin.png";

let facebook_link = "https://www.facebook.com/labib.ahammed.18";
let instagram_link = "https://www.instagram.com/labib__ahammed/";
let linkedin_link = "https://www.linkedin.com/in/shalaahammed/";
let current_year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-bottom">
        <div className="footer-left">
          <p>© {current_year} Labib ahammed. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <img
            src={facebook_icon}
            alt="facebook icon"
            onClick={() => window.open(facebook_link, "_blank")}
          />
          <img
            src={instagram_icon}
            alt="insta icon"
            onClick={() => window.open(instagram_link, "_blank")}
          />
          <img
            src={linkedin_icon}
            alt="linkedin icon"
            onClick={() => window.open(linkedin_link, "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
