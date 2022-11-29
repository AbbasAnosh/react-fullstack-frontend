import styled from "styled-components";

export const CardComponent = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
  h2 {
    font-size: 16px;
    font-weight: 500;
  }
`;
export const Image = styled.div`
  width: 100%;
  height: 400px;
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
  }
`;
export const FirstImage = styled.img`
  z-index: 1;
`;
export const SecondImage = styled.img``;
export const Price = styled.div`
  display: flex;
  gap: 20px;

  h3 {
    font-size: 12px;
    font-weight: 500;

    &:first-child {
      color: gray;
      text-decoration: line-through;
    }
  }
`;
