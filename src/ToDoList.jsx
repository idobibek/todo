import React from 'react';
import TodoItem from './ToDoItem';

function TodoList({ todos, completeTodo, removeTodo }) {
  return (
    <div className="space-y-4">
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          index={index} 
          todo={todo} 
          completeTodo={completeTodo} 
          removeTodo={removeTodo} 
        />
      ))}
    </div>
  );
}

export default TodoList;
