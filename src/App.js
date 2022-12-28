import styled from "styled-components";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import TaskList from "./components/Tasks/TaskList";

const dummy_data = [
  {
    id: "t1",
    text: "Do excercises",
  },
  {
    id: "t2",
    text: "Finish HTML/CSS of the project",
  },
  {
    id: "t3",
    text: "Do laundry",
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a0000;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Header />
      <Input />
      <TaskList data={dummy_data} />
    </Container>
  );
}

export default App;
