import React from "react";
import styled from "styled-components";
import twittersrc from "../Images/twitter.png";
import travelixsrc from "../Images/travelix.png";
import mmt from "../Images/mmt.png";

const project = [
  {
    img: mmt,
    title: "Make My Trip",
    github: "https://github.com/surajhimanshu/Make-my-trip-clone",
    demo: "https://make-my-trip-clone.vercel.app",
    description: "Make my trip is an online travel company",
    tech: "REACT  |  NODE  |   EXPRESS  |   MONGODB  |  MUI   ",
    page: "Navbar, Flight Search,  Registration &  Login",
    functionalities: " Flight Search, Booking Flight, Registration & Login ",
  },
  {
    img: twittersrc,
    title: "Twitter",
    github: "https://github.com/surajhimanshu/Chirp",
    demo: "https://twitter-clone-masai.herokuapp.com",
    description: "Twitter is a microblogging and social networking service",
    tech: "REACT  |  REDUX  |  CSS  |  JAVASCRIPT ",
    page: "SearchBar , Explore , Profile  & Newsletter pages",
    functionalities: "Search User and explore section with sub-sections",
  },
  {
    img: travelixsrc,
    title: "Travelix",
    github: "https://github.com/surajhimanshu/Travelix-Clone",
    demo: "https://amanullah21.github.io/Travelix-Clone/",
    description: "A website where we can book cheapest flight tickets ",
    tech: "HTML  |  CSS | JAVASCRIPT",
    page: "Homepage & Blog pages",
  }
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
  flex-wrap:wrap;
  align-items:flex-start;
  // justify-content:flex-start;
  gap: 10px;
  margin-top: 50px;
  row-gap: 40px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const ProjectCard = styled.div`
  width: 40%;
  margin: 0 auto;
  // border:1px solid green;
  min-width:450px;
  @media only screen and (max-width: 1100px) {
    min-width: 600px;
  }
  @media only screen and (max-width: 800px) {
    min-width: 500px;
  }
  @media only screen and (max-width: 700px) {
   min-width: 400px;
  }
  @media only screen and (max-width: 500px) {
    min-width: 350px;
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
  margin-left:-7%;
  @media only screen and (max-width: 900px) {
    margin-left:-10%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

const ProjectDescription = styled.div`
  margin: 20px 4px;
  font-size: 20px;
  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
}
`;

const ProjectStack = styled.div`
  margin-bottom: 15px;
  margin-left: 5px;
  font-size: 1.2em;
  @media only screen and (max-width: 800px) {
    font-size: 0.99em;
  }
`;

const ProjectResponsibility = styled.div`
  font-size: 1.2em;
  margin-left: 5px;
  margin-bottom:20px;
  > div:first-child {
    margin-bottom: 10px;
  }
  > div:not(:first-child) {
    margin-bottom: 7px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 0.99em;
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
            <ProjectStack>{pro.tech}</ProjectStack>

            <ProjectResponsibility>
              <div style={{textDecoration: "underline"}}>Role and responsibilities : </div>

              <div>
                <li>
                  <span>Pages - </span> {pro.page}
                </li>
              </div>
              {pro.functionalities && (
                <div>
                  <li>
                    <span>Functionalities - </span>
                    {pro.functionalities}
                  </li>
                </div>
              )}
            </ProjectResponsibility>

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
