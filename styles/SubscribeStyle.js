import styled from "styled-components";

export const SubscribeDiv = styled.div`
  width: 100%;
  margin: 3rem 0;
  height: 40vh;
  background-attachment: fixed;
  background-position: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  h3 {
    text-transform: uppercase;
    color: var(--primary);
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }
  small {
    font-size: 1rem;
    letter-spacing: 0.1em;
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
  position: relative;
  @media (max-width: 700px) {
    width: 80%;
  }
  input {
    width: 100%;
    padding: 12px;
    background: #c9c9c9;
    outline: none;
    color: var(--primary);
    border: none;
    ::placeholder {
      color: var(--primary);
    }
  }
  button {
    position: absolute;
    padding: 12px 12px;
    border-left: 4px;
    border: none;
    background-color: var(--primary);
    color: #fdf1ec;
    cursor: pointer;
  }
`;
