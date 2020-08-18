import React from "react";
import '../App.css'
import styled_comp from "styled-components"

const ProjectStyle = styled_comp.div`
  font-family: sans-serif;
  
  .logo{
    color: #fff;
    padding-top: 2.5rem;
    text-align : center;
    font-size: 1.75rem;
  }
  .line1 {
    width: 330px;
    height: 10rem;
    position: relative;

    border-bottom: 1px solid #9e363a;
    -webkit-transform:
        translateY(-60px)
        translateX(600px)
        rotate(27deg); 
    position: absolute;
    /* top: -20px; */
    left: 10rem;
}
`;

const Home = () => {
  return (
    <ProjectStyle>
      <h1 className = "logo">
      
        
      </h1>
      
    </ProjectStyle>
  );
};

export default Home;
