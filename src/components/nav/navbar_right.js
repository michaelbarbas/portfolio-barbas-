import React from "react";
import { NavLink } from "react-router-dom";
import styled_comp from "styled-components";
import "../../App.css";

const Ul = styled_comp.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;
font-family: sans-serif;
li {
  padding-top: 50px;
  padding: 18px 10px;
  text-decoration: none;
  text-align: center;
}

a:hover{
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  padding: 6px 0;
}

@media (max-width: 800px) {
  flex-flow: column nowrap;
  
  
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 225px;
  box-shadow: ${({ open }) => (open ? "-1px 0px 10px 1px #000" : "0")};
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  
  a:hover{
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    padding: 6px 0;
  }
}
`;

const NavBarRight = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <NavLink
          exact
          to="/"
          activeStyle={{
            textDecoration: "none",
            color: "#000",
            fontFamily: "monospace",
            fontSize: "1.4rem",
          }}
          style={{
            textDecoration: "none",
            color: "#000",
            fontFamily: "monospace",
            fontSize: "1.4rem",
          }}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          activeStyle={{
            textDecoration: "none",
            color: "#000",
            fontFamily: "monospace",
            fontSize: "1.4rem",
          }}
          style={{
            textDecoration: "none",
            color: "#000",
            fontFamily: "monospace",
            fontSize: "1.4rem",
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          activeStyle={{
            textDecoration: "none",
            color: "#000",
            fontFamily: "monospace",
            fontSize: "1.4rem",
          }}
          style={{
            textDecoration: "none",
            color: "#000",
            fontFamily: "monospace",
            fontSize: "1.4rem",
          }}
        >
          Contact
          
        </NavLink>
      </li>
    </Ul>
  );
};

export default NavBarRight;
