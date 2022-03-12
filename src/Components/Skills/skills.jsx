import React from "react";
import styled from "styled-components";
import html from "../Icons/html.svg";
import css from "../Icons/css.svg";
import javascript from "../Icons/javascript.svg";
import react from "../Icons/react.svg";
import redux from "../Icons/redux.svg";
import node from "../Icons/node.svg";
import express from "../Icons/express.svg";
import mongodb from "../Icons/mongodb.svg";
import git from "../Icons/git.svg";
import heroku from "../Icons/heroku.svg";


const icons = [
  { icon: html, caption: "HTML" },
  { icon: css, caption: "CSS" },
  { icon: javascript, caption: "JavaScript" },
  { icon: react, caption: "React" },
  { icon: redux, caption: "Redux" },
  { icon: node, caption: "Node" },
  { icon: express, caption: "Express" },
  { icon: mongodb, caption: "MongoDB" },
  { icon: git, caption: "Git" },
  { icon: heroku, caption: "Heroku" },
];

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
   margin-top: 50px;
  flex-wrap: wrap;

  > div:nth-child(1) {
    margin-right: 10px;
    margin-left: 10px;
  }
  > div:nth-child(2) {
    margin-right: 35px;
  }
  @media only screen and (max-width: 900px) {
    >div:nth-child(2),>div:nth-child(1),>div{
        margin-right:5px;
        }
    }
`;

const SkillsContent = styled.div`
  width: 24%;
  display: grid;
  place-items: center;
  margin-bottom: 25px;
  img {
    width: 70px;
    height: 70px;
    background-color: white;
    padding: 10px;
  }
  div {
    margin-top: 10px;
    font-size:1.4em;
  }
  @media only screen and (max-width: 900px) {
    width: 20%;
    img {
        width: 50px;
        height: 50px;
    }
    div {
        margin-top: 10px;
        font-size:1em;
      }
}

`;

const SkillTitle = styled.div`
    text-align:center;
    font-size:45px;
    font-weight:bold;
    position:relative;
    // border:1px solid red;
    z-index:2;
    :after{

        content : "";
        position: absolute;
        left    : 45%;
        bottom  : -15%;
        height  : 1px;
        width   : 10%;
        margin: auto;  
        border-bottom:3px solid var(--yellowresume);
    }
    @media only screen and (max-width: 900px) {
      font-size:25px;
      :after{
        width   : 7%;
        left    : 46%;
        }
      }
 
`;

const skills = () => {
  return (
    <div style={{marginTop:"70px"}}>
      <SkillTitle>Skills</SkillTitle>
      <SkillsWrapper>
        {icons.map((icon) => (
          <SkillsContent key={icon.caption}>
            <img src={icon.icon} alt="" />
            <div>{icon.caption}</div>
          </SkillsContent>
        ))}
      </SkillsWrapper>
    </div>
  );
};

export default skills;
