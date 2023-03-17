import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { VscFileCode } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import Hex from "../../Assets/Hex.png";
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
const HexColorator = () => {
  return (
    <Project>
      <Left>
        <Heading>Hex Colorator</Heading>
        <Skills>Skills</Skills>
        <UL>
          <LI>
            <AiOutlineCheck />
            HTML & CSS
          </LI>
          <LI>
            <AiOutlineCheck />
            JavaScript & Chroma.js
          </LI>
          <LI>
            <AiOutlineCheck />
            Multiple Functionalities
          </LI>
          <LI>
            <AiOutlineCheck />
            Local Storage
          </LI>
          <LI>
            <AiOutlineCheck />
            Well-Commented Code
          </LI>
          <LI>
            <AiOutlineCheck />
            Responsive
          </LI>
        </UL>
        <Buttons>
          <Button>
            <a href="https://devokla-hex-colors.netlify.app/" target="_blank">
              Website &nbsp; <CgWebsite />
            </a>
          </Button>
          <Button>
            <a
              href="https://github.com/DevOkla/public/tree/main/Hex_Colorator"
              target="_blank"
            >
              Code &nbsp;
              <VscFileCode />
            </a>
          </Button>
        </Buttons>
      </Left>
      <Right>
        <IMG src={Hex} alt="Dubai"></IMG>
      </Right>
    </Project>
  );
};

export default HexColorator;
