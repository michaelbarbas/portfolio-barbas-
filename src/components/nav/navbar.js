import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import styled_comp from "styled-components";
import MenuButton from "./menu_button";
import '../../App.css';

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
  font-weight: bold;
  font-family: sans-serif;
  font-size: 3rem;
  padding-top: 4rem;
  @media (max-width: 800px) {
    font-weight: normal;
    font-size: 1.5rem;
    padding-top: 5rem;

  }
  .title{
    font-size: 1.25rem;
    text-align: center;
    padding-top: 1rem;
    @media (max-width: 800px) {

    }
  }
}
background-color: #367feb;
color: white;
.dot{
  height: 50px;
  width: 50px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-flex;
  padding: 100px;
  margin-top: 1rem;
  background-color: white;
  @media (max-width: 800px) {
    display:none;
  }
}
@media (max-width: 800px) {
  
}
`;

const Navbar = () => {
  return (
    <Nav>
      <span class="dot"></span>
      <div className="logo">Michael Barbas
        <pre class="title">Software Engineer</pre>
      </div>
      
      <MenuButton />
    </Nav>
  );
};

export default withRouter(Navbar);
