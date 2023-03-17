import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { easeOut, motion } from "framer-motion";

/*Importing Icons */

import { RiMenu3Line, RiCloseLine, RiMailSendLine } from "react-icons/ri";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import { MdMilitaryTech } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { GiDesk } from "react-icons/gi";

const Hero = (theme) => {
  //mobile menu toggle
  const [toggleMenu, setToggleMenu] = useState(false);
  //Adding framer motion page animation
  const pageAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const lineAnimationLeft1 = {
    hidden: {
      opacity: 0,
      x: 400,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        ease: easeOut,
      },
    },
  };
  const lineAnimationLeft2 = {
    hidden: { opacity: 0, x: 400 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1,
        ease: easeOut,
      },
    },
  };
  const lineAnimationLeft3 = {
    hidden: { opacity: 0, y: 200 },
    show: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 1.4,
        ease: easeOut,
      },
    },
  };
  return (
    <HeroDiv
      className={`${theme ? "light" : "dark"}`}
      key={theme ? "light" : "dark"}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Logo variants={lineAnimationLeft1} initial="hidden" animate="show">
        <pre> &lt;DevOkla&gt; </pre>
      </Logo>

      <H1 variants={lineAnimationLeft2} initial="hidden" animate="show">
        Web Developer, Designer and more
      </H1>

      <Links variants={lineAnimationLeft3} initial="hidden" animate="show">
        <Link href="#Projects">
          Projects <AiOutlineFundProjectionScreen />
        </Link>
        <Link href="#Technologies">
          Technologies
          <MdMilitaryTech />
        </Link>
        <Link
          href="https://www.linkedin.com/in/maamoun-okla-283120235/"
          target="_blank"
        >
          Linkedin <AiOutlineLinkedin />
        </Link>

        <Link href="https://github.com/DevOkla" target="_blank">
          Github
          <AiFillGithub />
        </Link>
        <Link href="#SetUp">
          My Setup <GiDesk />
        </Link>
        <Link href="#footer">
          Contact <RiMailSendLine />
        </Link>
      </Links>
      <Burger
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: easeOut, delay: 2 }}
      >
        {toggleMenu ? (
          <BurgerCloseLine onClick={() => setToggleMenu(false)} />
        ) : (
          <BurgerRiMenu3Line onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <MiniLinks>
            <MiniLink href="#Projects">
              <AiOutlineFundProjectionScreen />
              Projects
            </MiniLink>
            <MiniLink href="#Technologies">
              <MdMilitaryTech />
              Technologies
            </MiniLink>
            <MiniLink
              href="https://www.linkedin.com/in/maamoun-okla-283120235/"
              target="_blank"
            >
              <AiOutlineLinkedin /> Linkedin
            </MiniLink>
            <MiniLink href="https://github.com/DevOkla" target="_blank">
              <AiFillGithub />
              Github
            </MiniLink>
            <MiniLink href="#SetUp">
              <GiDesk />
              SetUp
            </MiniLink>
          </MiniLinks>
        )}
      </Burger>
    </HeroDiv>
  );
};

const HeroDiv = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.pagesBackgroundGradient};

  animation-duration: 4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled(motion.div)`
  font-size: 4rem;

  background: ${({ theme }) => theme.logoBackground};

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const H1 = styled(motion.h1)`
  color: ${({ theme }) => theme.text};

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 950px) {
    margin: 2rem 4rem;
    text-align: center;
  }
`;
const Links = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
  @media (max-width: 750px) {
    display: none;
  }
`;
const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: ${({ theme }) => theme.buttonBg};

  border: 2px solid ${({ theme }) => theme.buttonText};
  border-radius: 8px;
  padding: 16px 24px;
  margin: 1rem 2rem;
  color: ${({ theme }) => theme.buttonText};
  font-size: 1.3rem;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.buttonText};
    color: ${({ theme }) => theme.buttonBg};
    transition: 300ms;
    border: 2px solid black;
  }
`;

const Burger = styled(motion.div)`
  @media (min-width: 751px) {
    display: none;
  }

  position: absolute;
  top: 20px;
  right: 1rem;
  text-align: end;
`;
/* Animated Menu for smaller Screens */
const ScaleUpCenter = keyframes`
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5)   ;
    transform-origin: top right;
    opacity: 0; 
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1)  ;
    transform-origin: top right;
    opacity: 1; 
  }
`;

const BurgerCloseLine = styled(RiCloseLine)`
  color: ${({ theme }) => theme.buttonText};
  font-size: 3rem;
`;
const BurgerRiMenu3Line = styled(RiMenu3Line)`
  color: ${({ theme }) => theme.buttonText};
  font-size: 3rem;
`;
const MiniLinks = styled.div`
  font-size: 2rem;
  min-width: 50%;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  animation: ${ScaleUpCenter};
  background-color: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  backdrop-filter: blur(0.5rem);
  animation-duration: 0.5s;
`;
const MiniLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;
  padding: 0.2rem 0.6rem;
  color: ${({ theme }) => theme.buttonText};
  border-left: 2px solid ${({ theme }) => theme.buttonText};

  margin: 0.7rem 0 0 0;

  &:hover {
    background: ${({ theme }) => theme.buttonText};
    color: ${({ theme }) => theme.buttonBg};

    transition: 0.4s;
  }
`;

export default Hero;
