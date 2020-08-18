import React from "react";
import { withRouter } from "react-router-dom";
import styled_comp from "styled-components";
import MenuButton from "./menu_button";
import '../../App.css';


const Nav = styled_comp.nav`

@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

font-family: 'Source Code Pro', monospace;
width: 100%;
height: 240px;
display: flex;
align-items: flex-start;
padding: 0 50px;

justify-content: space-between;
.logo {
  padding: 15px 0;
  font-weight: 200;
  font-family: sans-serif;
  font-size: 1.5rem;
  padding-top: 5rem;
  @media (max-width: 1000px) {
    font-weight: normal;
  }
  .title{
    font-size: 1.3rem;
    text-align: center;
    padding-top: 1rem;
    @media (max-width: 1000px) {

    }
  }
  
}



.line1 {
  width: 300px;
  height: 10.75rem;
  position: relative;

  border-bottom: 6px solid #fff;
  -webkit-transform:
      rotate(50deg); 
      
  -webkit-transform:
      skew(30deg);
  position: absolute;
  /* top: -20px; */
  left: .1rem;
}


color: white;


@media (max-width: 800px) {
  .line1{
    display:none;
  }
}


.Name-border{
  padding-top: 20px;
}

.Name {
  color: #000;
  border-right: solid 3px #000;
  white-space: nowrap;
  overflow: hidden;    
  display: inline-block;
  font-family: 'Source Code Pro', monospace;
  font-size: 28px;
  color: #000;

  animation: animated-text 3s steps(30,end) 1s 1 normal both, animated-cursor 800ms steps(30,end) infinite;
  
}


.Title{
  color: #000;
  overflow: hidden;    
  white-space: nowrap;
  border-right: solid 3px #fff;
 
  

  animation: fadeIn ease 7s;

}

/* text animation */

@keyframes animated-text{
from{width: 0;}
to{width: 240px;}
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

`;


const Navbar = () => {
  return (
    <Nav id = "navigation">
      {/* <span class="dot"></span> */}
      <div className="Name-border">
        <div className="Name">Michael Barbas</div>
        <div className="Title">Software Developer</div>
      </div>
      <MenuButton />
    </Nav>
  );
};

export default withRouter(Navbar);
