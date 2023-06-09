import styled from "styled-components";

export const Project = styled.div`
  height: 20rem;
  display: flex;
  flex-direction: row;
  color: white;
  min-width: 28rem;
  max-width: 34rem;
  margin: 3% auto;
  box-flex: unset;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 50, 0.8),
    rgba(0, 0, 140, 0.9)
  );
  
  border-radius: 1rem;
  border: 2px solid white;
  padding-left: 2rem;
  &:hover {
    scale: 1.15;
    transform-origin: top;
    transition: 0.3s ease;
  }
`;

export const Left = styled.div`
  border-radius: 8px 0 0 8px;
  flex: 1.75;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  color: white;
`;
export const Skills = styled.h2`
  margin: 0.5rem 0.2rem;
  display: flex;
  align-items: center;
   gap: 10px;
  color: var(--color-text);
`;
export const UL = styled.ul`
 
`;

export const LI = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: 1rem;
  gap: 2px;
`;
export const Buttons = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 1rem;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: Black;
  border: 2px solid white;
  border-radius: 0.5rem;
  padding: 12px 12px;
  margin: 0rem 0.2rem;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1em;
  max-width: 100%;
  min-width: 2rempx;
  cursor: pointer;
  &:active,
  &:hover {
    background: white;
    color: black;
    border-radius: 6px;
    transition: 300ms;
  }
  @media screen and (max-width: 500px ) {
    padding: 0.2rem 0.5rem;
    line-height: 2rem;
    margin: 0rem 0.7rem;
    border: 1px solid white;
 
  }
`;

export const Right = styled.div`
  flex: 1.25;
  display: flex;
  overflow: hidden;

  border-radius: 0 1rem 1rem 0;
`;
export const IMG = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const H1 = styled.h1`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2.5rem;
 padding: 2rem 0;
` ;