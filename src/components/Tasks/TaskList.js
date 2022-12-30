import React from "react";
import { ListContainer } from "./TaskList.styled";
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
  const eachTask = data.map((task) => {
    return (
      <Task
        key={task.id}
        task={task.text}
        id={task.id}
        onRemoveTask={removeTask}
      />
    );
  });

  return <ListContainer>{eachTask}</ListContainer>;
};

export default TaskList;
