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
  const [fetchedTasks, setFetchedTasks] = useState([]);
  const [btnPressed, setBtnPressed] = useState(false);

  // CATCHING THE MOMENT THE BUTTON IS CLICKED
  const btnPressedHandler = () => {
    setBtnPressed(true);
    setTimeout(() => {
      setBtnPressed(false);
    }, 500);
  };

  // FETCHING THE DATA FROM FIREBASE ON THE PAGE LOAD
  useEffect(() => {
    if (fetchedTasks || btnPressed) {
      const fetchTasks = async () => {
        const response = await fetch(
          "https://taskapp-fetch-post-default-rtdb.firebaseio.com/tasks.json"
        );
        const userTasks = await response.json();

        const loadedTasks = [];

        for (let key in userTasks) {
          loadedTasks.push({ id: key, text: userTasks[key].text });
        }
        setFetchedTasks(loadedTasks);
      };
      fetchTasks().catch((error) => {
        console.log(error.message);
      });
    }
  }, [btnPressed, fetchedTasks]);

  // ADDING USER-ENTERED TASK TO THE ARRAY OF TASKS
  const addNewTask = (taskData) => {
    setFetchedTasks((prevTasks) => [...prevTasks, {id: taskData.id, text: taskData.text}]);
  };

  return (
    <AppContainer>
      <Header />
      <Input onBtnPressed={btnPressedHandler} onGetNewTask={addNewTask} />
      {fetchedTasks && <TaskList data={fetchedTasks} />}
    </AppContainer>
  );
}

export default App;
