import React from "react";
import { ListContainer } from "./TaskList.styled";
import Task from "./Task";

const TaskList = ({ tasks, onRemoveTask }) => {
  const removeTask = (taskId) => {
    onRemoveTask(taskId);
  };

  // SEPARATING TASKS TO DISPLAY THEM ONE BY ONE
  const eachTask = tasks.map((task) => {
    return <Task key={task.id} task={task} onRemoveTask={removeTask} />;
  });

  return <ListContainer>{eachTask}</ListContainer>;
};

export default TaskList;
