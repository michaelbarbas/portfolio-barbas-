import React from "react";
import styled_comp from "styled-components";
import "../App.css";
import Fig from "../image/stick_figure.png";

const Container = styled_comp.div`
  font-family: 'Arvo', serif;

  @media (max-width: 800px) {
    margin-left: 30px;
  }
  
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
    padding-top: 50px;
    animation: fadeIn ease 5s;
    float: right;
    display: inline-block;
    margin-left: 500px;
    margin-right: 500px;
    @media (max-width: 800px) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  .description img {
    width: 90px;
    // height: auto;
    float: left;
    
  }

  .fig{
    padding-right: 20px;
    padding-bottom: 50px;
  }

  .skills_section{
    animation: fadeIn ease 5s;
    padding-top: 20px;
    margin: auto;
    width: 50%;
    text-align: center;
  }
  .skills{
    
  }

 
  ul{
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  li{
    align-items: center;
    list-style: none;
    display: inline-block;
   
    
    text-align: center;
  }
 
`;
const About = () => {
  return (
    <Container className="container">
      <div className="about_section">
        <h1 class="intro">Hi there!</h1>

        <p className="description">
          <img src={Fig} class="fig" alt="figure"></img> My name is Michael
          Barbas, and I am a software developer. I am currently a student
          studying Computer Science at SUNY Plattsburgh. I have a profound
          interest in software and game development.
        </p>
      </div>

      <div class="skills_section">
        <h2 class="skills">Skills</h2>
        <h3 class="prog_lang">
          Programming Languages:
          <ul class="languages">
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
          </ul>
        </h3>
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
