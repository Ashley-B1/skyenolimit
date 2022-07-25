import React from "react";

import "./About.css";
import aboutPhoto from "../../images/dev-photos/main-photo.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={aboutPhoto} alt="dev" className="about-image" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          My name is Skye and I'm glad you found my portfolio! I've been working
          with computers all my life. I was actually introduced to my first
          computer program in 1999. I've been coding for about 5 years and fell
          in love with frontend development.
        </p>
        <p className="about-desc">
          I am a frontend developer who took her love of technology and art and
          turned it into a career. I'm here to break the barriers down for
          women, especially WOC in the STEM field. The first time I ever touched
          a computer was in 1999! I was 2 years old when my granny, a former
          Apple employee, introduced me to the World Wide Web. We used to play
          games on her computer as a form of bonding. It's is quite odd to say
          my granny was my gateway to technology but it's true. My granny was a
          tech savvy woman who passed her love for modern technology down to me.
          Now that I have the torch, I want ignite the path for other women to
          take charge in the tech field. I have all the skills for front-end
          development such as HTML, CSS, Javascript, React, React-Redux, and
          Pug. I also have some backend skills such as Express, Sequelize, and
          PostgreSQL. My favorite programs are React and SCSS. I'm currently
          based in Dallas, TX but hope to relocate soon.
        </p>
        <p className="about-desc ab2">
          I build out wireframes using paper, dry erase boards, and Figma. I use
          resources like geeks for geeks, W3 Schools, MDN, and stack overflow
          for troubleshooting. I am immersed in all my projects and want to dive
          deeper into development to see how to make fully functional and
          user-friendly websites.
        </p>
      </div>
    </div>
  );
};

export default About;
