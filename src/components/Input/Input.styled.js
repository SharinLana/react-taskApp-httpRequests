import styled from "styled-components";

export const InputContainer = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
`;

export const InputField = styled.input`
  width: 300px;
  height: 36px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 5px 5px 5px 15px;
  margin-right: 10px;

  @media all and (max-width: 350px) {
    width: 200px;
    font-size: 14px;
    margin-right: 5px;
  }
`;

export const Button = styled.button`
  height: 100%;
  font-size: 16px;
  font-weight: 700;
  padding: 5px 20px;
  margin-left: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: ${(props) => (props.hover ? "white" : "#89c4e1")};
  color: ${(props) => (props.hover ? "#58287F" : "#1a0000")};

  @media all and (max-width: 350px) {
    font-size: 14px;
    margin-left: 5px;
  }
`;
