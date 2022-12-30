import styled from "styled-components";

export const TaskContainer = styled.div`
  background-color: #58287f;
  margin: 8px;
  padding: 5px 15px;
  border: 1px solid white;
  border-radius: 10px;
  width: 90%;

  @media all and (max-width: 350px) {
    padding: 0px 15px;
  }

`;

export const TaskText = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 500;

  @media all and (max-width: 350px) {
    font-size: 13px;
  }
`;
