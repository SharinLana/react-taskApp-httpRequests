import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import TaskList from "./components/Tasks/TaskList";
import useHttp from "./hooks/useHttp";
import { AppContainer, LoadingMessage, ErrorMessage } from "./App.styled";

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoaded, error, sendRequest } = useHttp();

  // FETCHING TASKS FROM FIREBASE REAL TIME DATABASE ON THE PAGE LOAD
  useEffect(() => {
    // PROCESSING THE HTTP RESPONSE {-NKUoos227ZB_pUV4MZw: {…}, -NKUopzufoRN04-p-ALd: {…}, …}
    const applyData = (data) => {
      const loadedTasks = [];

      for (let key in data) {
        loadedTasks.push({ id: key, text: data[key].text });
      }
      setTasks(loadedTasks);
    };
    // EXECUTING THE useHttp() CUSTOM HOOK
    sendRequest(
      {
        url: "https://taskapp-fetch-post-default-rtdb.firebaseio.com/tasks.json",
      },
      applyData
    );
  }, [sendRequest]);

  // STORING THE NEWLY CREATED TASK TO AN ARRAY
  const addTask = (taskObj) => {
    setTasks((prevTask) => [...prevTask, taskObj]);
  };

  // REMOVING TASK FROM THE LIST (ARRAY)
  const removeTask = (taskId) => {
    const applyData = (data) => {
      if (!data) {
        const updatedTaskList = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTaskList);
      }
    };

    sendRequest(
      {
        url: `https://taskapp-fetch-post-default-rtdb.firebaseio.com/tasks/${taskId}.json`,
        method: "DELETE",
      },
      applyData
    );
  };

  return (
    <AppContainer>
      <Header />
      <Input onAddTask={addTask} />
      {!isLoaded && !error && <LoadingMessage>Loading...</LoadingMessage>}
      {error && !isLoaded && <ErrorMessage>{error}</ErrorMessage>}
      {isLoaded && !error && (
        <TaskList tasks={tasks} onRemoveTask={removeTask} />
      )}
    </AppContainer>
  );
}

export default App;
