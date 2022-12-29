import React from "react";
import { Container, Text } from "./Task.styled";

const Task = (props) => {
  // GETTING THE ID OF THE CLICKED TASK
  const onClickHandler = () => {
    props.onRemoveTask(props.id);
  };

  return (
    <Container onClick={onClickHandler}>
      <Text>{props.task}</Text>
    </Container>
  );
};

export default Task;
