import React from "react";
import styled from "styled-components";
import Task from "./Task";

const Container = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3vh;
`;

const TaskList = (props) => {
  const eachTask = props.data.map((task) => {
    return <Task key={task.id} task={task} />;
  });
  return <Container>{eachTask}</Container>;
};

export default TaskList;
