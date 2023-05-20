import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import {
  DiscoverDubai,
  SRadio,
  RecipeProject,
  ToDoProject,
  PhotographerProject,
  PexonProject,
  NostalgiaProject,
  HexColorator,
  EmiratesAdventoursProject,
  ChillTunesProject,
  KramforsKProject,
} from "../components/projects/index.js";
import Lights from "../Assets/Lights.jpg";

const Projects = (theme) => {
  return (
    <ProjectsContainer id="Projects">
      <ProjectsDiv>
        <H1>Chosen Projects</H1>
        <Splide
          options={{
            autoplay: true,
            type: "loop",
            interval: 3800,
            speed: 2000,
            width: "100%",
            pagination: true,
            start: 1,
            perMove: 1,
            perPage: 2,
            breakpoints: {
              900: {
                perPage: 1,
              },
            },
            fixedHeight: "27rem",
            padding: 40,
            focus: "center",
            trimSpace: false,
            label: "My Carousel",
            drag: "free",
            gap: "20rem",
            arrows: false,
          }}
        >
          <SplideSlide>
            <DiscoverDubai />
          </SplideSlide>
          <SplideSlide>
            <ChillTunesProject />
          </SplideSlide>
          <SplideSlide>
            <SRadio />
          </SplideSlide>
          <SplideSlide>
            <EmiratesAdventoursProject />
          </SplideSlide>
          <SplideSlide>
            <RecipeProject />
          </SplideSlide>
          <SplideSlide>
            <PexonProject />
          </SplideSlide>
          <SplideSlide>
            <ToDoProject />
          </SplideSlide>
          <SplideSlide>
            <HexColorator />
          </SplideSlide>
          <SplideSlide>
            <KramforsKProject />
          </SplideSlide>
          <SplideSlide>
            <PhotographerProject />
          </SplideSlide>
          <SplideSlide>
            <NostalgiaProject />
          </SplideSlide>
        </Splide>
      </ProjectsDiv>
    </ProjectsContainer>
  );
};

const ProjectsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  background: ${({ theme }) => theme.pagesBackgroundGradient};

  box-shadow: inset 0px 15px 15px -11px #fff, inset 0px -15px 15px -11px #fff;
`;
const H1 = styled.h1`
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2.5rem;
  padding: 2rem 0;
`;

const ProjectsContainer = styled.div`
  background-position: center center;
`;
export default Projects;
