import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/profile-image.jpeg";
let organization = "Shotodol IT";
let tense = "serve";
let experience = 1;
let projects = 5;
let students = 100;
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a motivated student with a strong interest in technology,
              digital skills, and continuous self-development. I work with the
              MERN Stack to build modern web applications and have practical
              knowledge of Digital Marketing, understanding how technology and
              online growth connect.
            </p>
            <p>
              Alongside my learning journey, I {tense} as a Basic Computer
              Mentor at {organization}, where I help beginners build confidence
              with essential computer skills. I enjoy turning ideas into real
              projects, solving problems, and helping others grow in the digital
              world while sharpening my own expertise every day.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Office Application</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>META Marketing</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Canva Design</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="achievement">
          <h1>{experience}+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>{projects}+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>{students}+</h1>
          <p>STUDENTS TAUGHT</p>
        </div>
      </div>
    </div>
  );
};

export default About;
