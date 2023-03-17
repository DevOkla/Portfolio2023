import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { VscFileCode } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import Nostalgia from "../../Assets/Nostalgia.jpg";
import {
  Project,
  Left,
  Heading,
  Skills,
  UL,
  LI,
  Buttons,
  Button,
  Right,
  IMG,
} from "./Project.style.js";
const NostalgiaProject = () => {
  return (
    <Project>
      <Left>
        <Heading>Nostalgia</Heading>
        <Skills>Skills</Skills>
        <UL>
          <LI>
            <AiOutlineCheck />
            HTML & CSS
          </LI>
          <LI>
            <AiOutlineCheck />
            JavaScript
          </LI>
          <LI>
            <AiOutlineCheck />
            Animations & Transitions
          </LI>
          <LI>
            <AiOutlineCheck />
            BarbraJS
          </LI>
          <LI>
            <AiOutlineCheck />
            GSAP & ScrollMagic
          </LI>
        </UL>
        <Buttons>
          <Button>
            <a href="https://devokla-nostalgia.netlify.app" target="_blank">
              Website &nbsp; <CgWebsite />
            </a>
          </Button>
          <Button>
            <a
              href="https://github.com/DevOkla/public/tree/main/Nostalgia"
              target="_blank"
            >
              Code &nbsp;
              <VscFileCode />
            </a>
          </Button>
        </Buttons>
      </Left>
      <Right>
        <IMG src={Nostalgia} alt="Nostalgia"></IMG>
      </Right>
    </Project>
  );
};

export default NostalgiaProject;
