import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/form';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch all todos from backend
  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:5000/api/todos');
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
    <TodoForm/>
    </>
  );
}

export default App;
