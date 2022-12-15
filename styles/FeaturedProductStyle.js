import styled from "styled-components";

export const FeaturedProductComponent = styled.div`
  margin: 5% 10%;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    padding: 1em;
    border: none;
    background-color: #2c546d;
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.1em;
    cursor: pointer;
  }
  h1 {
    flex: 2;
  }
  p {
    flex: 3;
  }
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
