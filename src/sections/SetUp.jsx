import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

import Setup1 from "../Assets/Setup1.jpg";
import Setup2 from "../Assets/Setup2.jpg";

const SetUp = (theme) => {
  return (
    <SetUpSection id="SetUp">
      <SetUpContainer>
        <H1>My Setup</H1>
        <Gallery>
          <ImgContainer1>
            <IMG1 src={Setup1} alt="Computers"></IMG1>
          </ImgContainer1>
          <ImgContainer2>
            <IMG2 src={Setup2} alt="Computers"></IMG2>
          </ImgContainer2>
        </Gallery>
      </SetUpContainer>
    </SetUpSection>
  );
};
const SetUpSection = styled.div`
  min-height: 60vh;

  background-repeat: no-repeat;
  background-size: cover;
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
const SetUpContainer = styled.div`
  padding-bottom: 4rem;
  background: ${({ theme }) => theme.pagesBackgroundGradient};
`;
const Gallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  padding: 0.4rem 3rem;
  margin: 4rem 4px 0 4px;
`;
const LightsAnimation = keyframes`
 0% {  background-position: 0 0; }
 50% {  background-position: 700% 0; }
 100% { background-position: 0 0; }
`;
const ImgContainer1 = styled.div`
  max-width: 40rem;
  backdrop-filter: blur(0.1rem);
  &:before {
    position: absolute;
    content: "";
    background: linear-gradient(
      45deg,
      #fb0094,
      #0000ff,
      #00ff00,
      #ff0000,
      #fb0094,
      #0000ff,
      #00ff00,
      #ff0000,
      #fb0094
    );

    background-size: 400%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: -2;
    filter: blur(30px);
    outline: none;
    animation-name: ${LightsAnimation};
    animation-duration: 100s;
    animation-iteration-count: infinite;
  }
  @media (max-width: 950px) {
    &::before,
    &::after {
      background-size: 100%;
      background: none;
      height: auto;
      width: 100%;
      animation: none;
    }
  }
`;
const ImgContainer2 = styled.div`
  max-width: 40rem;
  backdrop-filter: blur(0.1rem);
  &:before {
    position: absolute;
    content: "";
    background: linear-gradient(
      45deg,
      #fb0094,
      #0000ff,
      #00ff00,
      #ff0000,
      #fb0094,
      #0000ff,
      #00ff00,
      #ff0000,
      #fb0094
    );

    background-size: 400%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: -2;
    filter: blur(30px);
    outline: none;
    animation-name: ${LightsAnimation};
    animation-duration: 100s;
    animation-iteration-count: infinite;
  }
  @media (max-width: 950px) {
    &::before,
    &::after {
      background-size: 100%;
      background: none;
      height: auto;
      width: 100%;
      animation: none;
    }
  }
`;

const IMG1 = styled.img`
  width: 100%;
  border: 3px solid blue;
  max-width: 70rem;
  z-index: 1;
`;
const IMG2 = styled.img`
  width: 100%;
  border: 3px solid blue;
  max-width: 70rem;
  z-index: 1;
`;

export default SetUp;
