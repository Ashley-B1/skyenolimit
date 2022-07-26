import React from "react";
import "./Experience.css";

const Experience = ({ company, title, skills, date }) => {
  return (
    <section className="experience">
      <div className="exp-box">
        <div className="exp-intro">
          <h2 className="exp-heading">{company}</h2>
          <h3 className="exp-info exp-title">{title}</h3>
          <h3 className="exp-info exp-date">{date}</h3>
        </div>
        <ul className="exp-data">
          {skills.map((skill) => (
            <li className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
