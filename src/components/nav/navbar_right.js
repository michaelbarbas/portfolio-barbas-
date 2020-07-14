import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import styled_comp from "styled-components";
import '../../App.css';

const Ul = styled_comp.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;
font-family: sans-serif;
li {
  padding: 18px 10px;
  text-decoration: none;
  text-align: center;
}

@media (max-width: 800px) {
  flex-flow: column nowrap;
  background-color: #fff;
  border-left: 3rem solid #3078e3;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 225px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  li{
    font-weight: bold;
  }
  a:hover{
    border-top: 4px solid #367feb;
    border-bottom: 4px solid #367feb;
    padding: 6px 0;
  }
}
`;


const NavBarRight = ({ open }) => {
  return (
    <Ul open={open} >
      <li>
        <NavLink exact to="/" activeStyle={{ textDecoration: 'none'}, {color: '#367feb'}} style={{ textDecoration: 'none', color: '#367feb'}}>Home
        </NavLink>
      </li>
      
      <li>
        <NavLink to="/about" activeStyle={{ textDecoration: 'none'}, {color: '#367feb'}} style={{ textDecoration: 'none', color: '#367feb'}}>About</NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeStyle={{ textDecoration: 'none'}, {color: '#367feb'}, {}} style={{ textDecoration: 'none', color: '#367feb'}}>Contact</NavLink>
      </li>
    </Ul>
  )
}

export default NavBarRight
