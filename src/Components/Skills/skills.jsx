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
width:70%;
margin:auto;
  display: flex;
  justify-content: center;
  align-items: center;
   margin-top: 50px;
  flex-wrap: wrap;
// border:1px solid green;
 
 @media only screen and (max-width: 500px) {
    width:80%;
   
    //  margin-right:17%;

    }

`;

const SkillsContent = styled.div`
  width: 20%;
  display: grid;
  place-items: center;
  margin-bottom: 25px;
  // border:1px solid red;

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
    width: 23%;
    img {
        width: 50px;
        height: 50px;
        padding: 7px;
    }
    div {
       
        font-size:1em;
      }
    }
  @media only screen and (max-width: 500px) {
    width: 30%;
    
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
    <div id="skills" style={{marginTop:"70px"}}>
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
