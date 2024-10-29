import React, { useState } from 'react';
import axios from 'axios';
import './todostyle.css';

const TodoForm = ({ fetchTodos }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = { title, description, time, date };

    try {
      // Post new todo to the backend
      const response = await axios.post('http://localhost:5000/api/todos', newTodo);
      console.log(response.data); // Ensure the response is being received correctly

      // Fetch updated todos
      fetchTodos();

      // Clear form
      setTitle('');
      setDescription('');
      setTime('');
      setDate('');

      // Set success message
      setSuccessMessage('Todo added successfully!');

      // Clear the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);

    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form" style={{ justifyContent: 'center', marginTop: '20px' }}>
      <div>
        <h2 style={{ paddingLeft: '150px' }}>ToDo List</h2>
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

      {/* Conditional rendering of the success message */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      
    </form>
  );
};

export default TodoForm;
