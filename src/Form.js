import { useState } from 'react';

const Form = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState('');

  const sumbitTodo = (event) => {
    event.preventDefault(); // Without this, new item appears then disappears after render

    setTodos((currTodos) => {
      return [newTodo, ...currTodos];
    });
    setNewTodo(''); //Resetting the form after submitting
  };

  return (
    <form onSubmit={sumbitTodo}>
      <label>
        Add a new To-Do:
        <input
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
      </label>
      <button type="submit">Add To-Do </button>
    </form>
  );
};

export default Form;
