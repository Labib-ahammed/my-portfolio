import React from "react";
import "./Hero.css";
import heroImage from "../../assets/profile-image.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
let organizationName = "Shotodol IT";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={heroImage} alt="Hero" />
      <h1>
        <span>I'm Labib Ahammed</span>, Student from Bangladesh
      </h1>
      <p>
        I’m a student skilled in MERN Stack and Digital Marketing, and I work as
        a Basic Computer Mentor at {organizationName}.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
