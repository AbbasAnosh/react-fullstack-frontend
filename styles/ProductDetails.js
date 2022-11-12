import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-left: 10%;
  margin-right: 10%;

  img {
    width: 40%;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`;

export const ProductInfo = styled.div`
  width: 40%;
  h3 {
    margin-bottom: 1rem;
  }
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1rem;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }
  svg {
    color: var(--primary);
    width: 1.5rem;
    height: auto;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
`;
