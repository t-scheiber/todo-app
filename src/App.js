import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault(); // Prevent form submission reload
    if (!todoInput.trim()) return; // Avoid adding empty todos
    setTodos([...todos, { id: Date.now(), text: todoInput, completed: false }]);
    setTodoInput('');
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.text}
            <button onClick={() => toggleCompleted(todo.id)} className='todobuttons'>Toggle Completed</button>
            <button onClick={() => deleteTodo(todo.id)} className='todobuttons'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
