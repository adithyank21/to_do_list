import React, { useState } from 'react';
import axios from 'axios';
import './todostyle.css';

const TodoForm = ({ fetchTodos }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = { title, description, time, date };

    // Post new todo to the backend
    await axios.post('http://localhost:5000/api/todos', newTodo);

    // Fetch updated todos
    fetchTodos();

    // Clear form
    setTitle('');
    setDescription('');
    setTime('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
