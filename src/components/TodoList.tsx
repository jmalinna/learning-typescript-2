import React from 'react';

interface TodoListProps {
  todoItems: { id: string, text: string }[];
}

const TodoList = ({ todoItems }: TodoListProps) => {
  return (
    <ul>
      {todoItems.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  )
};
export default TodoList;
