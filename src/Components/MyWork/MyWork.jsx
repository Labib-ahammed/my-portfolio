import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import projects from "../../assets/project";
import Arrow_icon from "../../assets/arrow.svg"
const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="my latest work" />
      </div>
      <div className="mywork-container">
        {projects.map((work, index) => {
          return (
            <a
              key={index}
              href={work.p_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={work.p_img} alt={work.p_name} />
            </a>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={Arrow_icon} alt="arrow-icon for my work" />
      </div>
    </div>
  );
};

export default MyWork;
