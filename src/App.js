import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import TaskList from "./components/Tasks/TaskList";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a0000;
  width: 100%;
  height: 100vh;
`;

function App() {
  const [tasks, setTasks] = useState([]);

  // FETCHING THE DATA FROM FIREBASE ON THE PAGE LOAD
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://taskapp-fetch-post-default-rtdb.firebaseio.com/tasks.json"
      );
      const userTasks = await response.json();

      // TRANSFORMING THE RECEIVED DATA FROM FIREBASE
      // (AN OBJECT WITH NESTED OBJECTS)
      // AND STORING IT TO THE ARRAY
      const loadedTasks = [];

      for (let key in userTasks) {
        loadedTasks.push({ id: key, text: userTasks[key].text });
      }

      setTasks(loadedTasks);
    };
    
    fetchTasks().catch((error) => {
      console.log(error.message);
    });
  }, []);

  // ADDING THE USER-ENTERED TASK TO THE ARRAY OF TASKS
  const addNewTask = (taskData) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: taskData.id, text: taskData.text },
    ]);
  };

  // REMOVING THE SELECTED TASK FROM THE TASK LIST
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <AppContainer>
      <Header />
      <Input onGetNewTask={addNewTask} />
      {tasks && <TaskList data={tasks} onRemoveTask={removeTask} />}
    </AppContainer>
  );
}

export default App;
