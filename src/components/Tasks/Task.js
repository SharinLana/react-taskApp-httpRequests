import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #58287F;
  margin: 8px;
  padding: 5px 15px;
  border: 1px solid white;
  border-radius: 10px;
  width: 100%;
`;

const Text = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

const Task = (props) => {
  const { text } = props.task;

  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default Task;
