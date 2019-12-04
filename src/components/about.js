import React from "react";
import '../App.css'
const About = () => {
  return (
    <div className="container">
      <div className = "about_section">
        <h1 className="about">About me</h1>

        <p className = "description"> My name is Michael Barbas, and I am a software engineer. I am currently a junior at 
        SUNY Plattsburgh. I like to work with various technologies, and my current and future projects I work on come from
        problems that have become prevalent at some point in my life. Being able to fix those problems through software
        solutions is a way for me to help others and further improve my skills. Following next semester of Spring 2020, I 
        have been offered a position as the Treasurer of Coding Hub, an organization providing software solutions for
        students to help solve problems at SUNY Plattsburgh</p>
      </div>

      <div className = "skills_section">
        <h2 className = "skills">Skills</h2>
          <div className = "prog_lang">Programming Languages:
          <p></p>
          </div>
          <div className = "other">Other skills:
          </div>
      </div>

    </div>


  );
};

export default About;
