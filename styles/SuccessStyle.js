import styled from "styled-components";
const { motion } = require("framer-motion");

export const Wrapper = styled.div`
  margin: 3rem 0;
`;
export const Section = styled.div`
  background-color: white;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    color: white;
    background-color: var(--primary);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 2rem;
    cursor: pointer;
    border: none;
    border-radius: 0.5rem;
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 2rem;
  }
  h2 {
    margin-bottom: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  color: var(--primary);
  width: 50%;
  border-radius: 0.5rem;
  background-color: #fdf1ec;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const Address = styled.div`
  font-size: 1rem;
  width: 100%;
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

export const OrderInfo = styled.div`
  font-size: 1rem;
  width: 100%;
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  div {
    padding-bottom: 1rem;
  }
`;
