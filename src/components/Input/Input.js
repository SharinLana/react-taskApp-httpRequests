import React, { useState } from "react";
import { Container, InputField, Button } from "./Input.styled";

const Input = ({ onBtnPressed }) => {
  const [hover, setHover] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // GETTING INPUT VALUE
  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };

  // POSTING USER ENTERED DATA ON FIREBASE
  const onClickHandler = async () => {
    if (inputValue.trim() === "") return;

    await fetch(
      "https://taskapp-fetch-post-default-rtdb.firebaseio.com/tasks.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      }
    ).catch((error) => {
      console.log(error.message);
    });

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
    <Container>
      <InputField
        placeholder="Task..."
        onChange={getInputValue}
        value={inputValue}
      />
      <Button
        onMouseOver={onMouseOverHandler}
        onMouseOut={onMouseOutHandler}
        onClick={onClickHandler}
        hover={hover}
      >
        Add Task
      </Button>
    </Container>
  );
};

export default Input;
