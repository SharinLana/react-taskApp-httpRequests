import React, { useRef, useState } from "react";
import useHttp from "../../hooks/useHttp";
import { InputContainer, InputField, Button } from "./Input.styled";

const Input = ({ onAddTask }) => {
  const [hover, setHover] = useState(false);
  const inputRef = useRef();
  const { sendRequest } = useHttp();

  // GENERATING AN OBJECT WITH ID = THE FIREBASE NAME AND TEXT = USER ENTERED TEXT
  // AND TRANSFERRING IT TO APP.JS
  const applyData = (taskText, data) => {
    const generatedId = data.name; //firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    onAddTask(createdTask);
  };

  // ADDING A NEW TASK
  const addTaskHandler = () => {
    const taskText = inputRef.current.value;

    // FUNCTION FROM THE CUSTOM HOOK
    sendRequest(
      {
        url: "https://taskapp-fetch-post-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      // EXECUTING THE RECEIVED HTTP RESPONSE {name: '-NKUlzoFcgDA8rw2ayoR'}
      applyData.bind(null, taskText)
    );

    // CLEARED THE INPUT FIELD AFTER SUBMITTING A NEW TASK
    inputRef.current.value = "";
  };

  const onMouseOverHandler = () => {
    setHover(true);
  };

  const onMouseOutHandler = () => {
    setHover(false);
  };

  return (
    <InputContainer>
      <InputField placeholder="Task..." ref={inputRef} />
      <Button
        onMouseOver={onMouseOverHandler}
        onMouseOut={onMouseOutHandler}
        onClick={addTaskHandler}
        hover={hover}
      >
        Add Task
      </Button>
    </InputContainer>
  );
};

export default Input;
