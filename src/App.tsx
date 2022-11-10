import React from 'react';
import TodoList from './components/TodoList';

function App() {
  const todoItems = [{ id: 't1', text: 'Finish the course'}];

  return (
    <div className="App">
      <TodoList todoItems={todoItems} />
    </div>
  );
}

export default App;
