import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  gap: 50px;
  justify-content: end;
  margin: 30px 100px 60px 0px;
  font-weight: bold;
  font-size: 1.5em;
  a{
    padding:1px 5px;
  }
  a:hover{
    background-color:white;
    color:var(--blueresume);
    font-weight: normal;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    margin: 0 0 5px 0;
    padding-top: 20px;
    justify-content: space-evenly;
    gap: 0px;
    font-size: 1.3em;
    // border:1px solid red;
  }
`;



const Navbar = () => {
  return (
    <NavbarContainer>
      <a href="#project">PROJECT</a>
      <a href="#resume">ABOUT</a>
      <a href="#skills">SKILLS</a>
      <a href="#contact">CONTACT</a>
      
    </NavbarContainer>
  );
};

export default Navbar;
