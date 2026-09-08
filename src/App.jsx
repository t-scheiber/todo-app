import React, { useRef, useState } from 'react';

/** @typedef {{id: number, text: string, completed: boolean}} Todo */
import './App.css';

function App() {
  const [todos, setTodos] = useState(/** @type {Todo[]} */ ([]));
  const nextId = useRef(0);
  const [todoInput, setTodoInput] = useState('');

  /** @param {import('react').FormEvent<HTMLFormElement>} e */
  const addTodo = (e) => {
    e.preventDefault(); // Prevent form submission reload
    if (!todoInput.trim()) return; // Avoid adding empty todos
    const todo = { id: nextId.current++, text: todoInput, completed: false };
    setTodos(current => [...current, todo]);
    setTodoInput('');
  };

  /** @param {number} id */
  const toggleCompleted = (id) => {
    setTodos(current =>
      current.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /** @param {number} id */
  const deleteTodo = (id) => {
    setTodos(current => current.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>✅ Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          aria-label="New todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span className="todo-text">{todo.text}</span>
            <button onClick={() => toggleCompleted(todo.id)} className='todobuttons'>
              {todo.completed ? '↩️ Undo' : '✓ Done'}
            </button>
            <button onClick={() => deleteTodo(todo.id)} className='todobuttons'>
              🗑️ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;