import React from "react";
import '../App.css'
import styled_comp from "styled-components"

const ProjectStyle = styled_comp.div`
  font-family: sans-serif;
  
  .logo{
    color: #367feb;
    padding-top: 2.5rem;
    text-align : center;
    font-size: 1.25 rem;
  }
  
`;

const Home = () => {
  return (
    <ProjectStyle>
      <h1 className = "logo">Projects</h1>
    </ProjectStyle>
  );
};

export default Home;
