import React from "react";
import styled from "styled-components";
import { GrMysql } from "react-icons/gr";
import {
  SiRedux,
  SiNextdotjs,
  SiWebpack,
  SiBlender,
  SiNodedotjs,
  SiJest,
  SiThreedotjs,
  SiMicrosoftsqlserver,
  SiStripe,
  SiMysql,
} from "react-icons/si";
const ProgressCard = () => {
  return (
    <Card>
      <NewTech>
        <SiNodedotjs />
        <Title>Node.js</Title>
      </NewTech>

      <NewTech>
        <SiRedux />
        <Title>Redux</Title>
      </NewTech>
      <NewTech>
        <SiMicrosoftsqlserver />
        <Title>SQL Azure</Title>
      </NewTech>
      <NewTech>
        <SiWebpack />
        <Title>Webpack</Title>
      </NewTech>
      <NewTech>
        <SiNextdotjs />
        <Title>Next.js</Title>
      </NewTech>
      <NewTech>
        <SiJest />
        <Title>Jest</Title>
      </NewTech>
      <NewTech>
        <SiStripe />
        <Title>Stripe</Title>
      </NewTech>
      <NewTech>
        <SiThreedotjs />
        <Title>Three.js</Title>
      </NewTech>
      <NewTech>
        <GrMysql />
        <Title>MySQL</Title>
      </NewTech>
    </Card>
  );
};
const Card = styled.div`
  width: 90%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.6rem;
  flex-wrap: wrap;
  background-color: #0969b3;
  font-size: 7rem;
  border-radius: 1rem;
`;
const NewTech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
`;
const Title = styled.div`
  font-size: 2rem;
`;
export default ProgressCard;
