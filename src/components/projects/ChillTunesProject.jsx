import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { VscFileCode } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import Chilltunes from "../../Assets/Chilltunes.png";
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
const ChillTunesProject = () => {
  return (
    <Project>
      <Left>
        <Heading>ChillTunes</Heading>
        <Skills>Skills</Skills>
        <UL>
          <LI>
            <AiOutlineCheck />
            React
          </LI>
          <LI>
            <AiOutlineCheck />
            CSS & SASS
          </LI>
          <LI>
            <AiOutlineCheck />
            Multiple Functionalities
          </LI>
          <LI>
            <AiOutlineCheck />
            UUID4
          </LI>
          <LI>
            <AiOutlineCheck />
            Responsive Design
          </LI>
        </UL>
        <Buttons>
          <Button>
            <a href="https://devokla-chilltunes.netlify.app/" target="_blank">
              Website &nbsp; <CgWebsite />
            </a>
          </Button>
          <Button>
            <a href="https://github.com/DevOkla/ChillTunes" target="_blank">
              Code &nbsp;
              <VscFileCode />
            </a>
          </Button>
        </Buttons>
      </Left>
      <Right>
        <IMG src={Chilltunes} alt="Dubai"></IMG>
      </Right>
    </Project>
  );
};

export default ChillTunesProject;
