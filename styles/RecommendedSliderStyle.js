import styled from "styled-components";

export const RecommendedProducts = styled.div`
  margin: 2% 10%;
`;

export const RelatedItem = styled.div`
  h2 {
    margin-bottom: 2rem;
  }
`;
export const RelatedItemContent = styled.div`
  padding: 1rem 1rem;
`;

export const Content = styled.div`
  background-color: white;
  display: flex;
  border-radius: 0.5rem;
  flex-direction: column;
  padding: 1rem 1rem;

  img {
    width: 100%;
    cursor: pointer;
    border-radius: 0.5rem;
  }
  h4 {
    padding: 0.5rem 0rem;
    color: var(--primary);
  }
`;

export const Button = styled.button`
  background-color: var(--primary);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #fdf1ec;
  cursor: pointer;
  flex-shrink: 0;
  font-size: 24px;
  font-weight: 1000;
  height: 2.5rem;
  width: 2.5rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: 0.1s;
  }
`;
