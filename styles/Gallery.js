import styled from "styled-components";

export const Gallery = styled.div`
  display: grid;
  margin: 5% 0;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
`;
