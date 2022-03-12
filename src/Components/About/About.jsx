import React from "react";
import styled from "styled-components";
import Project from "../Project/Project";
import Resume from "../Resume/Resume";
import Skills from "../Skills/skills";

const AboutWrapper = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
  @media only screen and (max-width: 800px) {
    margin-top: -10px;
  }
  @media only screen and (max-width: 430px) {
    margin-top: -30px;
  }
`;

const AboutTitle = styled.div`
  width: 30%;
  margin: auto;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 3px;

  div {
    width: 40%;
    margin: auto;
    padding-bottom: 4px;
    border-bottom: 5px solid var(--yellowresume);
  }
  @media only screen and (max-width: 900px) {
    font-size: 30px;
    div {
      border-bottom: 3px solid var(--yellowresume);
    }
  }
  @media only screen and (max-width: 630px) {
    font-size: 19px;
  }
`;

const AboutContent = styled.div`
  width: 80%;
  margin: 40px auto 0;
  font-size: 20px;
  font-weight: light;
  letter-spacing: 3px;
  text-align: center;
  @media only screen and (max-width: 900px) {
    font-size: 16px;
    margin-top: 20px;
  }
  @media only screen and (max-width: 630px) {
    font-size: 14px;
  }
`;

const About = () => {
  return (
    <AboutWrapper id="resume">
      <AboutTitle>
        About me
        <div></div>
      </AboutTitle>
      <AboutContent>
        I am currently learning full stack web development at Masai School. I am
        passionate about solving real world problems and actively looking for
        opportunities in the field of web development and software engineering.
      </AboutContent>
      <Resume />
      <Skills />
      <Project />
    </AboutWrapper>
  );
};

export default About;
