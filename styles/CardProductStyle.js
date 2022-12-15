import styled from "styled-components";

export const CardComponent = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;
export const Image = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  transition: 0.3s ease;

  &:hover {
    .secondimg {
      z-index: 2;
    }
  }
  span {
    position: absolute;
    top: 5px;
    left: 5px;
    background-color: white;
    color: teal;
    padding: 3px 5px;
    z-index: 3;
    font-weight: 500;
    font-size: 12px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;
export const FirstImage = styled.img`
  z-index: 1;
`;
export const SecondImage = styled.img``;
export const Price = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
  h3 {
    font-size: 12px;
    font-weight: 500;

    &:first-child {
      color: gray;
      text-decoration: line-through;
    }
  }
`;

export const Wrapper = styled.div`
  background-color: #dad8dc;
  border-radius: 0.5rem;
  h2 {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    height: 2em;
    width: 9em;
    cursor: pointer;
  }
  .firstButton {
    border-color: var(--primary);
    color: #0094b4;
  }
  .secondButton {
    background-color: var(--primary);
    color: white;
    border-color: #0094b4;
  }
`;
export const Content = styled.div`
  padding: 10px;
`;
