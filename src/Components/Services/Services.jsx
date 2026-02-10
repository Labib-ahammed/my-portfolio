import React from "react";
import "../Services/Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services";
import arrow from "../../assets/arrow.svg";
const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="theme pattern for services" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          const limitedText =
            service.description.length > 70
              ? service.description.slice(0, 61) + "..."
              : service.description;

          return (
            <div key={index} className="services-format">
              <h3>{service.id}</h3>
              <h2>{service.name}</h2>
              <p>{limitedText}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow} alt={service.name} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
