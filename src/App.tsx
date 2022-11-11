import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const todoItems = [{ id: 't1', text: 'Finish the course'}];

  return (
    <div className="App">
      <TodoForm />
      <TodoList todoItems={todoItems} />
    </div>
  );
}

export default App;
