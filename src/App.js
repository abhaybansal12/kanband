import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import DisplayOptions from './components/DisplayOptions';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
  const [sortOrder, setSortOrder] = useState(localStorage.getItem('sortOrder') || 'priority');

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();

      // Ensure the structure is as expected and assign the data to state
      if (data && Array.isArray(data.tickets) && Array.isArray(data.users)) {
        setTickets(data.tickets);
        setUsers(data.users);
      } else {
        console.error("Unexpected API response structure");
        setTickets([]);
        setUsers([]);
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
      setTickets([]); // Default to an empty array if fetch fails
      setUsers([]);
    }
  };

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortOrder', sortOrder);
  }, [groupBy, sortOrder]);

  return (
    <div className="App">
      <DisplayOptions setGroupBy={setGroupBy} setSortOrder={setSortOrder} />
      <KanbanBoard tickets={tickets} users={users} groupBy={groupBy} sortOrder={sortOrder} />
    </div>
  );
};

export default App;
