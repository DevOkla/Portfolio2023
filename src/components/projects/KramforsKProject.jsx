import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { VscFileCode } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import { SiCss3 } from "react-icons/si";
import KramforsK from "../../Assets/KramforsK.png";
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
const KramforsKProject = () => {
  return (
    <Project>
      <Left>
        <Heading>K-Kommun Clone</Heading>
        <Skills>Skills</Skills>
        <UL>
          <LI>
            <AiOutlineCheck />
            React
          </LI>
          <LI>
            <AiOutlineCheck />
            Splide.js
          </LI>
          <LI>
            <AiOutlineCheck />
            Styled Components
          </LI>
          <LI>
            <AiOutlineCheck />
            Responsive Design
          </LI>
        </UL>
        <Buttons>
          <Button>
            <a
              href="https://devokla-kramfors-kommun-clone.netlify.app/"
              target="_blank"
            >
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
        <IMG src={KramforsK} alt="Dubai"></IMG>
      </Right>
    </Project>
  );
};

export default KramforsKProject;
