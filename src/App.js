import React, { useState } from 'react';
import TodoList from './ToDoList';
import TodoForm from './ToDoForm';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Todo App</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
