import React from "react";
import styled from "styled-components";
 
import { ImWordpress } from "react-icons/im";
import { FaExpeditedssl } from "react-icons/fa";
import {
  SiRedux,
  SiVisualstudiocode,
  
  SiGithub,
  SiFilezilla,
  SiStripe,
  SiVite,
} from "react-icons/si";
const OtherTechs = () => {
  return (
    <Card>
      <NewTech>
        <SiRedux />
        <Title>Redux</Title>
      </NewTech>
      <NewTech>
        <SiVite />
        <Title>Vite</Title>
      </NewTech>   
      <NewTech>
        <SiStripe />
        <Title>Stripe</Title>
      </NewTech>
      <NewTech>
        <FaExpeditedssl />
        <Title>SSL</Title>
      </NewTech>
      <NewTech>
        <SiFilezilla />
        <Title>FileZilla</Title>
      </NewTech> 
      <NewTech>
        <SiVisualstudiocode />
        <Title>VSCode</Title>
      </NewTech>
      

      <NewTech>
        <ImWordpress />
        <Title>WordPress</Title>
      </NewTech>
      <NewTech>
        <SiGithub />
        <Title>GitHub</Title>
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
export default OtherTechs;
