import React, { useState } from "react";
import toast from "react-hot-toast";

function Modal({ inputText, setInputtext, status, setStatus, ...props }) {
  function inputTexthandler(e) {
    console.log(e.target.value);
    setInputtext(e.target.value);
  }
  function inputStatushandler(e) {
    console.log(e.target.value);
    setStatus(e.target.value.toLowerCase());
  }
  const submitHandler = (e) => {
    if (props.editToggle === false) {
      e.preventDefault();
      props.setTodos([
        ...props.todos,
        {
          text: inputText,
          completed: status.toLowerCase(),
          id: Math.random() * 100,
          time: new Date().toLocaleString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }),
        },
      ]);
      console.log(props.todos, inputText, status);
      setInputtext("");
      setStatus("Incomplete".toLowerCase());
      props.Toggle();
      toast.success("Todo Added Successfully");
    } else {
      props.Toggle();
      const todosCopy = [...props.todos];

      console.log(sessionStorage.getItem("IdValue"));
      console.log(todosCopy[0]);
      for (let i = 0; i < todosCopy.length; i++) {
        if (todosCopy[i].id == sessionStorage.getItem("IdValue")) {
          if (todosCopy[i].completed == status.toLowerCase()) {
            toast.error("No changes made");
          } else {
            todosCopy[i].completed = status.toLowerCase();
            toast.success("Todo Updated Successfully");
          }
        }
      }
      props.setTodos(todosCopy);
      console.log(props.todos);
      props.setEditToggle(false);
      setInputtext("");
      setStatus("Incomplete".toLowerCase());
    }
  };
  const cancelHandler = () => {
    props.editToggle === true
      ? toast.error("No changes made")
      : toast.error("No task added");

    setInputtext("");
    setStatus("Incomplete".toLowerCase());
    props.setEditToggle(false);
    props.Toggle();
  };
  console.log(props.editToggle);
  return (
    <>
      {props.openModal ? (
        <div className="modalContainer">
          {/* <button className="close" onClick={() => props.Toggle()}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5N-T6MKdvEnQplkDnevgPL0TZnFgncapV8BvG2R-&s"
              alt="close"
              width="20"
              height="20"
            />
          </button> */}
          <div className="modal">
            <header className="modal_header">
              <h2 className="modal_header-title">
                {props.editToggle === false ? "Add" : "Update"} TODO
              </h2>
            </header>
            <div className="inputData">
              <label for="title">Title</label>
              <input
                name="title"
                id="title"
                type="text"
                value={inputText}
                onChange={inputTexthandler}
              />
              <label for="status">Status</label>
              <select
                name="filters"
                id="status"
                onChange={inputStatushandler}
                value={status}
              >
                <option value="incomplete">Incomplete</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <footer className="modal_footer">
              <button className="submit" type="submit" onClick={submitHandler}>
                {props.editToggle === false ? "Add" : "Update"} Task
              </button>
              <button className="modal-close" onClick={cancelHandler}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
