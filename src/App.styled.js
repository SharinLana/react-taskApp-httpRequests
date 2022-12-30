import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#58287f, #1a0000);
  width: 100%;
  height: 100vh;
`;

export const LoadingMessage = styled.p`
  color: white;
  font-size: 18px;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  color: white;
  font-size: 18px;
  text-align: center;
`;