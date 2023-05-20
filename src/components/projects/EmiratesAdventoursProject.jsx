import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { VscFileCode } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import Adventours from "../../Assets/Adventours.png";
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
const EmiratesAdventoursProject = () => {
  return (
    <Project>
      <Left>
        <Heading>EmiratesAdvenTours</Heading>
        <Skills>Skills</Skills>
        <UL>
          <LI>
            <AiOutlineCheck />
            Vite
          </LI>
          <LI>
            <AiOutlineCheck />
            Tailwind CSS
          </LI>
          <LI>
            <AiOutlineCheck />
            React Router
          </LI>
          <LI>
            <AiOutlineCheck />
            Local Storage & Color Mode
          </LI>
          <LI>
            <AiOutlineCheck />
            Own Domain
          </LI>
          <LI>
            <AiOutlineCheck />
            Responsive Design
          </LI>
        </UL>
        <Buttons>
          <Button>
            <a href="https://emiratesadventours.com/" target="_blank">
              Website &nbsp; <CgWebsite />
            </a>
          </Button>
          <Button>
            <a href="https://github.com/DevOkla/" target="_blank">
              Code &nbsp;
              <VscFileCode />
            </a>
          </Button>
        </Buttons>
      </Left>
      <Right>
        <IMG src={Adventours} alt="Dubai"></IMG>
      </Right>
    </Project>
  );
};

export default EmiratesAdventoursProject;
