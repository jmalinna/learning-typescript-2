import React, { useRef } from 'react';
  
const TodoForm = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log('enteredText=', enteredText);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo-item-input"></label>
        <input type="text" id="todo-item-input" ref={textInputRef} />
      </div>
      <button type="submit">Add todo</button>
    </form>
  )
};
export default TodoForm;
