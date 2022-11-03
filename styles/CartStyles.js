import styled from "styled-components";

export const CartWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

export const CartStyle = styled.div`
  width: 40%;
  background-color: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background-color: white;
  padding: 1rem;
  margin: 2rem 0rem;
  img {
    width: 8rem;
    border-radius: 0.3rem;
  }
`;

export const CardInfo = styled.div`
  width: 50%;
  div {
    display: flex;
    flex-direction: space-between;
  }
`;

export const EmptyStyle = styled.div`
  position: absolute;
  top: 1;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  h1 {
    font-size: 2rem;
    padding: 2rem;
  }
  svg {
    font-size: 6rem;
    color: var(--primary);
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
  gap: 0.4rem;

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
    color: #494949;
  }
`;
