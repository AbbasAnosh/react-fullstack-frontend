import styled from "styled-components";

export const ImageCarousel = styled.div`
  position: relative;
  image {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 600px;
  right: 300px;
  z-index: 100;
`;
