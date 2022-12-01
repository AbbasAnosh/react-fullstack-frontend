import styled from "styled-components";

export const Product = styled.div`
  padding: 5% 10%;
  display: flex;
  gap: 10px;
`;
export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  gap: 50px;
`;

export const Images = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    cursor: pointer;
    margin-bottom: 10px;
  }
`;
export const MainImage = styled.div`
  flex: 5;
  img {
    width: 100%;
    max-height: 800px;
    object-fit: cover;
  }
`;
export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 2%;
  .price {
    font-size: 30px;
    color: var(--primary);
    font-weight: 500;
  }
  p {
    font-size: 18px;
    font-weight: 300;
    text-align: justify;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background-color: var(--primary);
    color: white;
    font-size: 20px;
  }
`;
export const Button = styled.button`
  width: 250px;
  padding: 10px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  border: none;
  font-weight: 500;
`;
export const Link = styled.div`
  display: flex;
  gap: 20px;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: teal;
  font-size: 14px;
  cursor: pointer;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: gray;
  margin-top: 30px;
`;
export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: gray;
  margin-top: 30px;
`;
