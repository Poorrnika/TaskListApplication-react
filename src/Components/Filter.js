import React from "react";

function Filter() {
  return (
    <div className="filterDropdown">
      <select name="filters" id="filters">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}

export default Filter;
