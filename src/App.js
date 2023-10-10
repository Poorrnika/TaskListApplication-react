import AddTaskButtonFilter from "./Components/AddTaskButtonFilter";
import "./App.css";
import React, { useEffect, useState } from "react";
import TaskList from "./Components/TaskList";
import { Toaster } from "react-hot-toast";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredData, setFilteredData] = useState([]);
  const Toggle = () => setOpenModal(!openModal);
  const [editToggle, setEditToggle] = useState(false);
  const [inputText, setInputtext] = useState("");
  const [status, setStatus] = useState("Incomplete");

  useEffect(() => {
    filterHandler();
    console.log(filteredData);
  }, [todos, filter]);

  //Functions
  const filterHandler = () => {
    switch (filter) {
      case "completed": {
        setFilteredData(todos.filter((todo) => todo.completed === "completed"));
        break;
      }
      case "incomplete": {
        setFilteredData(
          todos.filter((todo) => todo.completed === "incomplete")
        );
        break;
      }
      default:
        setFilteredData(todos);
        break;
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="header">TODO LIST</h1>
        <AddTaskButtonFilter
          openModal={openModal}
          setOpenModal={setOpenModal}
          Toggle={Toggle}
          todos={todos}
          setTodos={setTodos}
          filter={filter}
          setFilter={setFilter}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          editToggle={editToggle}
          setEditToggle={setEditToggle}
          inputText={inputText}
          setInputtext={setInputtext}
          status={status}
          setStatus={setStatus}
        />
        <TaskList
          todos={todos}
          setTodos={setTodos}
          filteredData={filteredData}
          Toggle={Toggle}
          openModal={openModal}
          editToggle={editToggle}
          setEditToggle={setEditToggle}
          inputText={inputText}
          setInputtext={setInputtext}
          status={status}
          setStatus={setStatus}
        />
        <div>
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
      </div>
    </>
  );
}

export default App;
