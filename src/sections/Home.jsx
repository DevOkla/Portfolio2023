import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import { lightTheme, darkTheme } from "../components/DarklMode/Themes";
import TechWorld from "../Assets/TechWorld.jpg";
const Home = (theme) => {
  return (
    <HomeConatiner>
      <Hero theme={theme} />
    </HomeConatiner>
  );
};
const HomeConatiner = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${TechWorld});
  background-repeat: no-repeat;
  background-size: cover; ;;
`;

export default Home;
