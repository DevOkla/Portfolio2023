import React from "react";
import styled from "styled-components";
import { GrMysql } from "react-icons/gr";
import {
  SiNextdotjs,
  SiWebpack,
   
  SiNodedotjs,
  SiJest,
 
  SiMicrosoftsqlserver,
  
} from "react-icons/si";
const ProgressCard = () => {
  return (
    <Card>
      <NewTech>
        <SiNodedotjs />
        <Title>Node.js</Title>
      </NewTech>

 
      <NewTech>
        <SiMicrosoftsqlserver />
        <Title>SQL Azure</Title>
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
  background: ${({theme})=> theme.cardBg };
  font-size: 5rem;
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
