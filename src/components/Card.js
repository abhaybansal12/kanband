import React from 'react';

const priorityStyles = {
  4: "priority-urgent",
  3: "priority-high",
  2: "priority-medium",
  1: "priority-low",
  0: "priority-none",
};

const Card = ({ ticket }) => {
  const { title, priority, status, user } = ticket;
  const priorityClass = priorityStyles[priority] || "priority-none";

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Status: {status}</p>
      <p>User: {user}</p>
      <span className={`priority-badge ${priorityClass}`}>
        {priority === 4 ? "Urgent" :
         priority === 3 ? "High" :
         priority === 2 ? "Medium" :
         priority === 1 ? "Low" : "No Priority"}
      </span>
    </div>
  );
};

export default Card;
