import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex">
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          className="flex-1 p-2 border rounded-l outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task" 
        />
        <button 
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-700 transition"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
