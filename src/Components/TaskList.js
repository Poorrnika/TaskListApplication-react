import React from "react";
import Task from "./Task";

function TaskList({
  todos,
  setTodos,
  filteredData,
  Toggle,
  openModal,
  ...props
}) {
  const booleanValue = todos.length > 0 ? true : false;
  console.log(todos.length);
  console.log(`Todos count ${booleanValue}`);
  if (booleanValue) {
    return (
      <div className="flex-container">
        <div className="todo-container">
          <div className="todo-list">
            {filteredData.map((todo) => (
              <Task
                todo={todo}
                text={todo.text}
                todos={todos}
                setTodos={setTodos}
                Toggle={Toggle}
                openModal={openModal}
                editToggle={props.editToggle}
                setEditToggle={props.setEditToggle}
                setInputtext={props.setInputtext}
                setStatus={props.setStatus}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex-container">
        <span className="noTodo">No Todos</span>
      </div>
    );
  }
}

export default TaskList;
