import React from "react";
import { TaskContainer, Text } from "./Task.styled";

const Task = ({ task, onRemoveTask }) => {
  const onClickHandler = () => {
    onRemoveTask(task.id);
  };

  return (
    <TaskContainer onClick={onClickHandler}>
      <Text>{task.text}</Text>
    </TaskContainer>
  );
};

export default Task;
