import React from 'react';

const DisplayOptions = ({ setGroupBy, setSortOrder }) => {
  return (
    <div className="display-options">
      <div>
        <label>Group By: </label>
        <select onChange={(e) => setGroupBy(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div>
        <label>Sort By: </label>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default DisplayOptions;
