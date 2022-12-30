import styled from "styled-components";

export const ListContainer = styled.div`
  width: 400px;
  height: 50vh;
  overflow: scroll;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3vh;

  @media all and (max-width: 500px) {
    width: 300px;
  }

  @media all and (max-width: 350px) {
    width: 230px;
  }
`;
