import styled from "styled-components";

export const NavStyles = styled.div`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  margin: 0 10%;
  h2 {
    cursor: pointer;
    color: #2c546d;
    letter-spacing: 2px;
  }
  a {
    font-size: 1.2rem;
  }
`;

export const Category = styled.div`
  display: flex;
  gap: 2em;
  cursor: pointer;
  p {
    font-weight: 600;
    color: teal;
  }
`;

export const NavItems = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }
  h3 {
    font-size: 1rem;
    padding: 0.25rem;
  }
  svg {
    font-size: 1.5rem;
    color: #2c546d;
    width: 1.5rem;
    height: auto;
  }
  span {
    background-color: #ff2626;
    color: white;
    width: 1.3rem;
    height: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 0.75rem;
    position: absolute;
    right: -30%;
    top: -50%;
    font-weight: 500;
    pointer-events: none;
  }
`;
