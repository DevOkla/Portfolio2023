import React from "react";
import styled from "styled-components";
import binary from "../Assets/binary.jpg";

import {
  TailWindCard,
  StyledCompCard,
  SASSCard,
  ReactCard,
  HTMLCard,
  CSSCard,
  JSCard,
  FigmaCard,
  GithubCard,
  ValidatedCode,
} from "../components/Cards/index.js";
import ProgressCard from "../components/Cards/ProgressCard";
const Techs = (theme) => {
  return (
    <TechsContainer id="Technologies">
      <BackgroundGradient>
        <H1>Technologies </H1>
        <CardsContainer>
          <HTMLCard />
          <CSSCard />
          <JSCard />
          <ReactCard />
          <StyledCompCard />
          <SASSCard />
          <TailWindCard />
          <GithubCard />
          <FigmaCard />
          <ValidatedCode />
        </CardsContainer>
        <H1>In Progress </H1>
        <CardsContainer>
          <ProgressCard />
        </CardsContainer>
      </BackgroundGradient>
    </TechsContainer>
  );
};
const BackgroundGradient = styled.div`
  background: ${({ theme }) => theme.TechBackground}; ;
`;
const TechsContainer = styled.div`
  background-image: url(${binary});

  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;
const H1 = styled.h1`
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2.5rem;
  padding: 2rem 2rem 1rem 2rem;
`;

const CardsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 90rem;
  margin: auto;
  @media (max-width: 750px) {
    padding: 2rem 1rem;
    max-width: 95rem;
    width: 100%;
  }
`;
export default Techs;
