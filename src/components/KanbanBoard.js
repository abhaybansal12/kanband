import React from 'react';
import Column from './Column';

const KanbanBoard = ({ tickets = [], users = [], groupBy, sortOrder }) => {
  const userMap = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
  }, {});

  const ticketsWithUserNames = tickets.map((ticket) => ({
    ...ticket,
    user: userMap[ticket.userId] || 'Unknown User',
  }));

  const groupedTickets = ticketsWithUserNames.reduce((groups, ticket) => {
    const key = groupBy === 'user' ? ticket.user : ticket[groupBy];
    if (!groups[key]) groups[key] = [];
    groups[key].push(ticket);
    return groups;
  }, {});

  Object.keys(groupedTickets).forEach((key) => {
    groupedTickets[key].sort((a, b) => {
      if (sortOrder === 'priority') return b.priority - a.priority;
      if (sortOrder === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  });

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((key) => (
        <Column key={key} title={key} tickets={groupedTickets[key]} />
      ))}
    </div>
  );
};

export default KanbanBoard;
