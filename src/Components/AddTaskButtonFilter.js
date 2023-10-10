import React from "react";
import Modal from "./Modal";

function AddTaskButtonFilter(props) {
  const statusHandler = (e) => {
    props.setFilter(e.target.value);
  };
  return (
    <>
      <div className="taskButtonFilter">
        <button className="addtaskName" onClick={() => props.Toggle()}>
          Add Task
        </button>
        <select name="filters" id="filters" onClick={statusHandler}>
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <Modal
          openModal={props.openModal}
          Toggle={props.Toggle}
          todos={props.todos}
          setTodos={props.setTodos}
          filter={props.filter}
          setFilter={props.setFilter}
          filteredData={props.filteredData}
          setFilteredData={props.setFilteredData}
          Header={"Add"}
          editToggle={props.editToggle}
          setEditToggle={props.setEditToggle}
          inputText={props.inputText}
          setInputtext={props.setInputtext}
          status={props.status}
          setStatus={props.setStatus}
        />
      </div>
    </>
  );
}

export default AddTaskButtonFilter;
