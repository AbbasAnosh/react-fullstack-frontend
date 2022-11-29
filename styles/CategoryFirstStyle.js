import styled from "styled-components";

export const CategoryBody = styled.div`
  display: flex;
  gap: 10px;
  margin: 5% 10%;
`;

export const CategoryImage = styled.div``;
export const CategoryContent = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2em;
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 8px;
  }
`;
export const ImageComponent = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const CardComponent = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: 16px;
    font-weight: 500;
  }
`;
export const NewImage = styled.div`
  width: 100%;
  height: 500px;
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
