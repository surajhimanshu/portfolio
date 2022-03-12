import React from 'react';
import styled from "styled-components";

const ResumeContainer = styled.div`
    text-align:center;
    margin:40px 0;
    a{
      height:30px;
      border:1px solid yellowresume;
      padding:5px 15px;
      cursor:pointer;
      font-size:35px;
      font-weight:bold;
      color:var(--blueresume);
      background-color:var(--yellowresume);
      transition: all 0.2s ease-in-out;
    }
    a:hover{
      color:var(--yellowresume);
      background-color:var(--blueresume);
      border:3px solid white;
    }
    @media only screen and (max-width: 900px) {
      a
      {font-size:28px;}
     
  }
  @media only screen and (max-width: 630px) {
    a
      {font-size:20px;}
  }
`;

const Resume = () => {
  return (
    <ResumeContainer>
      <a target="_blank" href="https://drive.google.com/file/d/1rOAZiNyf7JtFRppDE0yBOYRfJMbM4zXD/view?usp=sharing">Resume</a>
    </ResumeContainer>
  )
}

export default Resume