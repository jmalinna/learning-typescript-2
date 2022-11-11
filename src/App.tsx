import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import 'antd/dist/antd.css';

function App() {
  const todoItems = ['Finish the course'];

  return (
    <div className="App">
      <TodoForm />
      <TodoList todoItems={todoItems} />
    </div>
  );
}

export default App;
