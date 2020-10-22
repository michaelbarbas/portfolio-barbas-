import React from "react";
import styled_comp from "styled-components";
import "../App.css";
import gamepad from "../image/gaming-gamepad.png";
import web from "../image/web-programming.png";
import phone from "../image/phone.png";

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
 
    animation: animated-text 1s steps(42,end) 1s 1 normal both;
    
    
    border-bottom: 3px solid blue;
    
    
  }

  /* text animation */

  @keyframes animated-text{
  from{width: 0;}
  to{width: 145px;}
  }

  @keyframes text-wait{
    from{display: none;}
    to{display: yes;}
    }

  @keyframes fadeIn{
    0%{
      opacity: 0;
    }
    40%{
      opacity: 0;
    }
    80%{
      opacity: 1;
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


  .skills_block{
    animation-name: fadeIn;
    animation-duration: 5s;
  }

  .container
  {
    img{
      max-width: 500px;
      max-height: 50px;
      
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    p{
      padding-top:15px;
    }
    padding: 3.75%;
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 0;
    grid-row-gap: 20px;
  }


  @media only screen and (min-width: 640px) {
    .container {
      grid-template-columns: 30% 30% 30%;
      grid-column-gap: 5%;
      grid-row-gap: 50px;
    }
    .container > div {
      padding: 20px;
    }
  }

  h3{
    padding-top: 3rem;
    text-align: center;
    font-size: 25px;
  }

  h2{
    padding-top: 20px;
    text-align: center;
    align-content: center;
  }

  h4{
    text-align: left;
    font-size: 15px;
    padding-top: 20px;
    padding-bottom: 10px;
  }

  ul {
    text-align: left;
    padding-left: 30px;
  }

`;
const About = () => {
  return (
    <Container className="container_ph">
      <div className="about_section">
        <h1 class="intro">Hi there!</h1>
      </div>

      <div class="skills_block">
        <div class="header">
          <h3>My Skills</h3>
        </div>
        <div class="container">
          <div class="skill-box">
            <div class="skill-header">
              <img src={web}></img>
              <h2>Web</h2>
            </div>
            <p>
              When I first started looking into programming, web technologies
              caught my eye since they are fairly simple to start off learning.
              After learning HTML and CSS, I was then introduced to further
              technologies such as Node and React.
            </p>
            
            <h4>Tools/Tech</h4>
            <ul class = "Languages">
              <li>Node</li>
              <li>React</li>
              <li>Redux</li>              
            </ul>

            <h4>Languages</h4>
            <ul class = "languages">
              <li>Javascript</li>
              <li>Typescript</li>
              <li>HTML</li>
              <li>CSS/SCSS</li>
            </ul>
            
          </div>
          <div class="skill-box">
            <div class="skill-header">
              <img src={phone}></img>
              <h2>Software</h2>
            </div>
            <p>
              Developing applications is very interesting, since nearly
              everyone in the world can access them. Just recently I have gotten
              involved with android development, using Flutter or React Native.
            </p>

            <h4>Tools/Tech</h4>
            <ul class = "Languages">
              <li>Node</li>
              <li>ExpressJS</li>
              <li>Firebase</li>
              <li>Flutter</li>
              <li>React Native</li>
              <li>Flutter</li>
            </ul>

            <h4>Languages</h4>
            <ul class = "languages">
              <li>Dart</li>
              <li>Kotlin</li>
              <li>Python</li>
              <li>Javascript</li>
            </ul>
            
              
           

          </div>
          <div class="skill-box">
            <div class="skill-header">
              <div class="img"></div>
              <img src={gamepad}></img>
              <h2>Games</h2>
            </div>
            <p>
              Ever since I was young I was always passionate about video games.
              I developed a profound interest in game development, where I
              started programming in C# and C++ in Unity and UE4.
            </p>

            <h4>Tools/Tech</h4>
            <ul class = "tools">
              <li>Unity</li>
              <li>Unreal Engine 4</li>
              <li>Blender</li>
            </ul>

            <h4>Languages</h4>
            <ul class = "languages">
              <li>C++</li>
              <li>C#</li>
            </ul>
            

          </div>
        </div>

        <div className = "Experience">
          <h2>Experience</h2>
        </div>
      </div>
    </Container>
  );
};

export default About;
