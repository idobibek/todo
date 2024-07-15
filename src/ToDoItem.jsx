import React from 'react';

function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className={`flex items-center justify-between p-4 border rounded ${todo.isCompleted ? 'bg-green-100' : 'bg-white'}`}>
      <span className={`flex-1 ${todo.isCompleted ? 'line-through' : ''}`}>{todo.text}</span>
      <div className="space-x-2">
        <button 
          onClick={() => completeTodo(index)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
        >
          {todo.isCompleted ? 'Undo' : 'Complete'}
        </button>
        <button 
          onClick={() => removeTodo(index)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
