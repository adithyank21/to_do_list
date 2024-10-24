import React, { useState, useEffect } from 'react';
import TodoForm from './components/form'; // assuming TodoForm is in the same directory
import axios from 'axios';
import Viewtolist from './components/viewtodollist';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Define the fetchTodos function
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos(); // Fetch todos when the component mounts
  }, []);

  return (
    <div>
      <TodoForm fetchTodos={fetchTodos} /> {/* Pass fetchTodos as a prop */}
      {/* <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
      <Viewtolist/>
    </div>
  );
};

export default App;
