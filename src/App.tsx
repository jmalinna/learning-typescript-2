import React, {  useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import 'antd/dist/antd.css';

function App() {
  const [todoItems, setTodoItems] = useState<string[]>([]);

  const handleTodoItemsAdding = (newItem: string) => {
    setTodoItems(prevTodoItems => [...prevTodoItems, newItem]);
  }

  return (
    <div className="App">
      <TodoForm addTodoItems={handleTodoItemsAdding} />
      <TodoList todoItems={todoItems} />
    </div>
  );
}

export default App;
