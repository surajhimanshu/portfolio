import React from "react";
import styled from "styled-components";
import linkedinsrc from "../Icons/linkedin.svg";
import gmailsrc from "../Icons/gmail.svg";
import phonesrc from "../Icons/phone.svg";
import githubsrc from "../Icons/github.svg";

const ContactContainer = styled.div`
  // border:1px solid green;
  margin-top: 80px;
  // border: 1px solid red;
  padding-bottom:40px;
  img {
    height: 45px;
    width: 45px;
    padding: 4px;
    background-color:white;
  }
`;

const ContactTitle = styled.div`
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 40px;
  letter-spacing:1px;
  position: relative;
  z-index: 2;
  :after {
    content: "";
    position: absolute;
    left: 44%;
    bottom: -15%;
    height: 1px;
    width: 10%;
    margin: auto;
    border-bottom: 3px solid var(--yellowresume);
  }
  @media only screen and (max-width: 800px) {
    font-size: 33px;
    :after {
      width:20%;
      left:40%;
    }
  }
  @media only screen and (max-width: 400px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 630px) {
    font-size: 22px;
  }
    
`;
const TouchContent = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  
  justify-content: center;
  align-items: center;
  // border: 1px solid red;
  flex-wrap: wrap;
  @media only screen and (max-width: 800px) {
     flex-direction: column;
     width: 95%;
  }
  
`;

const ContactCard = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  //  border: 1px solid magenta;
   @media only screen and (max-width: 800px) {
    width: 70%;
 }
`;

const Contacta = styled.a`
font-size:1.2em;
@media only screen and (max-width: 800px) {
  font-size:1em;
}
  ${(prop) => prop.lnk && `cursor: pointer`}
`;
const arr = [
  { icon: phonesrc, content: "+91 9973163399" },
  { icon: gmailsrc, content: "himanshu4suraj@gmail.com" },
  {
    icon: linkedinsrc,
    content: "linkedin.com/in/suraj-himanshu",
    lnk: "https://www.linkedin.com/in/suraj-himanshu-9aa58215a/",
  },
  {
    icon: githubsrc,
    content: "github.com/surajhimanshu",
    lnk: "https://github.com/surajhimanshu",
  },
];

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact me</ContactTitle>
      <TouchContent>
        {arr.map((item) => (
          <ContactCard>
            <img src={item.icon} alt="" srcset="" />
            <Contacta target="_blank"  rel="noreferrer" href={item.lnk} lnk={item.lnk}>
              {item.content}
            </Contacta>
          </ContactCard>
        ))}
      </TouchContent>
    </ContactContainer>
  );
};

export default Contact;
