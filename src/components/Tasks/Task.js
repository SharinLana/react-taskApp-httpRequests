import React from "react";
import { TaskContainer, TaskText } from "./Task.styled";

const Task = (props) => {
  // GETTING THE ID OF THE CLICKED TASK
  const onClickHandler = () => {
    props.onRemoveTask(props.id);
  };

  return (
    <TaskContainer onClick={onClickHandler}>
      <TaskText>{props.task}</TaskText>
    </TaskContainer>
  );
};

export default Task;
