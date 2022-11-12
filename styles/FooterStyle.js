import styled from "styled-components";

export const FooterSection = styled.div`
  margin-top: 70px;
  padding: 40px 0;
`;
export const FooterSectionOne = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: clamp(20px, 30px, 40px);
`;

export const FooterSectionTwo = styled.div`
  width: clamp(20%, 30%, 40%);
  h4 {
    font-weight: bold;
    margin-bottom: 30px;
    color: var(--primary);
  }
`;

export const ContentOne = styled.div`
  h4 {
    font-weight: bold;
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 25px;
  }
`;

export const ContentTwo = styled.div`
  h4 {
    font-weight: bold;
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 25px;
  }
`;

export const ContentThree = styled.div`
  h4 {
    font-weight: bold;
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 25px;
  }
`;

export const Text = styled.p`
  letter-spacing: 0.1em;
`;
