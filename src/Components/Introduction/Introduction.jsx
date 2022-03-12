import React from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import profile_photo from "../Images/profile.png";
import styles from "./introduction.module.css";
const IntroductionWrapper = styled.div`
  display: flex;
  height:400px;
  margin-top:0;
  //  border:1px solid red;

  @media only screen and (max-width: 800px) {
    flex-direction:column-reverse;
  }
`;
const IntroductionContent = styled.div`
 width:50%;
  position: relative;
  //  border:1px solid green;
  padding-left:30px;
  @media only screen and (max-width: 800px) {
    width:90%;
    margin:0 auto;
    height:190px;
    // border:1px solid red;
  }
 `;
 const IntroductionTitle = styled.div`
 height:100%;
  font-size:40px;
  letter-spacing: 1px;
  @media only screen and (max-width: 800px) {
    font-size:25px;
  }
  @media only screen and (max-width: 500px) {
    font-size:20px;
  }
 `;


const Introduction = () => {
  return (
    <IntroductionWrapper>
      <IntroductionContent>
        <IntroductionTitle style={{ display:"grid",placeItems:"center" }}>
          <span style={{ color: "white", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <div>Hello, I am Suraj Himanshu</div>
            <Typewriter
              words={["Web Developer", "Learner", "Coder"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </IntroductionTitle>
      </IntroductionContent>

      <IntroductionContent>
        <img src={profile_photo}  className={styles.imag}/>
      </IntroductionContent>
    </IntroductionWrapper>
  );
};

export default Introduction;
