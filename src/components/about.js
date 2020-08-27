import React from "react";
import styled_comp from "styled-components";
import "../App.css";

const Container = styled_comp.div`
  font-family: 'Arvo', serif;


  color: #333;
  
  margin-left: 50px;
  margin-right: 50px;

  .intro{
    margin: auto;
    
    white-space: nowrap;
    overflow: hidden;    
 
    animation: animated-text 2s steps(42,end) 1s 1 normal both;
    
    font-size: 25px;
    border-bottom: 3px solid blue;
    
    
  }

  /* text animation */

  @keyframes animated-text{
  from{width: 0;}
  to{width: 115px;}
  }

  @keyframes text-wait{
    from{display: none;}
    to{display: yes;}
    }

  @keyframes fadeIn{
    0%{
      opacity: 0;
    }
    60%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

  /* cursor animations */

  @keyframes animated-cursor{
  from{border-right-color: rgba(36, 36, 36, 0.75);}
  to{border-right-color: transparent;}
  }

  .description{
    padding-top: 20px;
    animation: fadeIn ease 5s;
  }

  .skills_section{
    animation: fadeIn ease 5s;
  }
`;
const About = () => {
  return (
    <Container className="container">
      <div className="about_section">
        <h1 class="intro">Hi there!</h1>
        <p className="description">
          {" "}
          My name is Michael Barbas, and I am a software engineer. I am
          currently a junior at SUNY Plattsburgh. I like to work with various
          technologies, and my current and future projects I work on come from
          problems that have become prevalent at some point in my life. Being
          able to fix those problems through software solutions is a way for me
          to help others and further improve my skills. I am currently the
          Treasurer of Coding Hub, an organization providing software solutions
          for students to help solve problems at SUNY Plattsburgh
        </p>
      </div>

      <div className="skills_section">
        <h2 className="skills">Skills</h2>
        <h3 className="prog_lang">Programming Languages: </h3>
        <ul className="languages">
          <li>Python</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
        </ul>
        <h4 className="other">Other skills: </h4>
        <ul className="other_skills">
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>Unix</li>
          <li>Git</li>
          <li>Firebase</li>
        </ul>
      </div>
    </Container>
  );
};

export default About;
