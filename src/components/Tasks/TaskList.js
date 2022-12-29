import React from "react";
import { Container } from "./TaskList.styled";
import Task from "./Task";

const TaskList = ({ data }) => {
  // DELETING TASK
  const removeTask = async (id) => {
    await fetch(
      `https://taskapp-fetch-post-default-rtdb.firebaseio.com/tasks/${id}.json`,
      {
        method: "DELETE",
        body: null,
      }
    ).catch((error) => {
      console.log(error.message);
    });
  };

  // REACHING EACH TASK OF THE FIREBASE OBJECT
  const eachTask = Object.entries(data).map((value) => {
    return (
      <Task
        key={value[0]}
        task={value[1]}
        id={value[0]}
        onRemoveTask={removeTask}
      />
    );
  });

  return <Container>{eachTask}</Container>;
};

export default TaskList;
