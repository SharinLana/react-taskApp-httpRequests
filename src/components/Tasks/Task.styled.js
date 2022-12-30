import styled from "styled-components";

export const TaskContainer = styled.div`
  background: linear-gradient(145deg, white, #89c4e1, #58287f);
  margin: 8px;
  padding: 5px 15px;
  border: 1px solid white;
  border-radius: 10px;
  width: 90%;

  @media all and (max-width: 350px) {
    padding: 0px 15px;
  }
`;

export const Text = styled.p`
  color: #1a0000;
  font-size: 14px;
  font-weight: 500;
`;
