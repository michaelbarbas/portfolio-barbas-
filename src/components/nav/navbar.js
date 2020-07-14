import React from "react";
import { withRouter } from "react-router-dom";
import styled_comp from "styled-components";
import MenuButton from "./menu_button";
import '../../App.css';

import GitHub from "../../image/github.png";     //
import LinkedIn from "../../image/linkedin.png"; //img

const Nav = styled_comp.nav`
font-family: sans-serif;
width: 100%;
height: 240px;
border-bottom: 2px solid #f1f1f1;
padding: 0 50px;
display: flex;
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
background-color: #367feb;
color: white;
.dot{
  height: 50px;
  width: 50px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-flex;
  padding: 100px;
  margin-top: 1rem;
  background-color: white;
  @media (max-width: 1000px) {
    display:none;
  }
}
@media (max-width: 800px) {
  //
}

.SocialMedia{
  margin-top: 11rem;
  margin-left
  display: inline-block;
  width: 850px;
  position:absolute;
  right : 0px;
  padding-right: 3.8rem;
  .Github{
    padding-right: 3rem;
    position:absolute;
    right: 0px;
  }
  .Linkedin{
    padding-right: 2.5rem;
    float:right;
  }
}
`;

const Navbar = () => {
  return (
    <Nav>
      {/* <span class="dot"></span> */}
      <div className="logo">Michael Barbas
        <pre class="title">Software Engineer</pre>
      </div>
      <div class="SocialMedia">
        <div class="Github">
          <a
            href="https://github.com/mbarbas11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="github"></img>
          </a>
        </div>
        <div class="Linkedin">
          <a
            href="https://www.linkedin.com/in/michael-barbas-30a147150/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="linkedin"></img>
          </a>
        </div>
      </div>
      
      <MenuButton />
    </Nav>
  );
};

export default withRouter(Navbar);
