import styled from "styled-components";

export const Products = styled.div`
  padding: 5% 10%;
  display: flex;
`;
export const LeftPart = styled.div`
  flex: 1;
  position: sticky;
  height: 100%;
  top: 50px;
`;
export const FilterItem = styled.div`
  margin-bottom: 30px;
  lable {
    margin-left: 10px;
  }
  h2 {
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

export const InputItem = styled.div`
  margin-bottom: 10px;
`;
export const RightPart = styled.div`
  flex: 3;
  margin-left: 2%;
  .newImage {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5%;
`;
