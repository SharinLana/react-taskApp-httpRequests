import React, { useState } from "react";
import { InputContainer, InputField, AddButton } from "./Input.styled";

const Input = ({ onBtnPressed, onGetNewTask }) => {
  const [hover, setHover] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // GETTING INPUT VALUE
  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };

  // POSTING USER ENTERED DATA ON FIREBASE
  const onClickHandler = async () => {
    if (inputValue.trim() === "") return;

    const response = await fetch(
      "https://taskapp-fetch-post-default-rtdb.firebaseio.com/tasks.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      }
    );

    const data = await response.json();

    const generatedId = data.name; // firebase key name for the unique id
    const enteredTaskObj = {id: generatedId, text: inputValue};

    onGetNewTask(enteredTaskObj)
    setInputValue("");
    onBtnPressed();
  };

  // STYLING THE BUTTON ON HOVER
  const onMouseOverHandler = () => {
    setHover(true);
  };

  const onMouseOutHandler = () => {
    setHover(false);
  };

  return (
    <InputContainer>
      <InputField
        placeholder="Task..."
        onChange={getInputValue}
        value={inputValue}
      />
      <AddButton
        onMouseOver={onMouseOverHandler}
        onMouseOut={onMouseOutHandler}
        onClick={onClickHandler}
        hover={hover}
      >
        Add Task
      </AddButton>
    </InputContainer>
  );
};

export default Input;
