import React, {  useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import 'antd/dist/antd.css';

function App() {
  const [todoItems, setTodoItems] = useState<string[]>([]);

  return (
    <div className="App">
      <TodoForm todoItems={todoItems} setTodoItems={setTodoItems} />
      <TodoList todoItems={todoItems} />
    </div>
  );
}

export default App;
