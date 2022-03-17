import React from "react";
import styled from "styled-components";
import twittersrc from "../Images/twitter.png";
import travelixsrc from "../Images/travelix.png";

const project = [
  {
    img: twittersrc,
    title: "Twitter",
    github: "https://github.com/surajhimanshu/Chirp",
    demo: "https://twitter-clone-masai.herokuapp.com",
    description: "Twitter is a microblogging and social networking service",
    tech:"REACT  |  REDUX  |  CSS  |  JAVASCRIPT "
  },
  {
    img: travelixsrc,
    title: "Travelix",
    github: "https://github.com/surajhimanshu/Travelix-Clone",
    demo: "https://amanullah21.github.io/Travelix-Clone/",
    description: "A website where we can book cheapest flight tickets ",
    tech:"HTML  |  CSS | JAVASCRIPT"
  },
];

const ProjectWrapper = styled.div`
  width: 100%;
  margin-top: 70px;
  @media only screen and (max-width: 800px) {
    width: 90%;
    margin: auto;
    margin-top: 90px;
  }
  @media only screen and (max-width: 430px) {
    margin-top: 70px;
  }
`;
const ProjectHeader = styled.div`
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  position: relative;
  z-index: 2;
  :after {
    content: "";
    position: absolute;
    left: 46%;
    bottom: -15%;
    height: 1px;
    width: 8%;
    margin: auto;
    border-bottom: 3px solid var(--yellowresume);
  }
  @media only screen and (max-width: 800px) {
    font-size: 34px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    :after {
      width: 13%;
      left: 44%;
    }
  }
`;

const ProjectContent = styled.div`
  display: flex;
  justiy-content: space-evenly;
  gap: 10px;
  margin-top: 50px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    > div:first-child {
      margin-bottom: 50px;
    }
  }
`;

const ProjectCard = styled.div`
  width: 45%;
  margin: 0 auto;
  @media only screen and (max-width: 800px) {
    width: 85%;
  }
  @media only screen and (max-width: 500px) {
    margin-top: -20px;
  }
`;

const ImageContainer = styled.div`
  background-image: url(${(props) => props.ima});
  background-color: #cccccc;
  // min-width:300px;
  width: 100%;
  height: 300px;
  background-position: center;
  background-repeat: repeat;
  background-size: 100% 100%;
  border: 1px solid white;
  border-radius: 7px;
  @media only screen and (max-width: 1200px) {
    background-size: cover;
    width: 90%;
  }
`;

const ProjectTitle = styled.div`
  text-align: center;
  font-size: 35px;
  letter-spacing: 1px;
  margin-bottom: 20px;
  @media only screen and (max-width: 800px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const ProjectDescription = styled.div`
  margin: 20px 4px;
  font-size: 20px;
  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }

  +div {
    margin: 0 0 15px 8px;
    font-size:1.2em;
    @media only screen and (max-width: 800px) {
      font-size: 0.99em;
    }
  }
  
  }
`;

const GitDemo = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  //  border:1px solid green;
  margin-left: 10px;
  @media only screen and (max-width: 800px) {
    width: 80%;
  }
  a {
    padding: 6px;
    font-size: 25px;
    letter-spacing: 1px;
    border: 1px solid white;
    border-radius: 5px;
    transition: background-color 0.35s ease-in-out;
    @media only screen and (max-width: 800px) {
      font-size: 18px;
    }
  }
  a:hover {
    background-color: white;
    color: var(--blueresume);
  }
`;

const Project = () => {
  return (
    <ProjectWrapper id="project">
      <ProjectHeader>Project</ProjectHeader>
      <ProjectContent>
        {project.map((pro) => (
          <ProjectCard key={project.title}>
            <ProjectTitle>{pro.title}</ProjectTitle>
            <ImageContainer ima={pro.img}>
              {/* <img src={pro.img} alt="" /> */}
            </ImageContainer>

            <ProjectDescription>{pro.description}</ProjectDescription>
           
            <div>{pro.tech}</div>
            <GitDemo>
              <a rel="noreferrer" target="_blank" href={pro.demo}>
                Demo
              </a>
              <a rel="noreferrer" target="_blank" href={pro.github}>
                Github
              </a>
            </GitDemo>
          </ProjectCard>
        ))}
      </ProjectContent>
    </ProjectWrapper>
  );
};

export default Project;
