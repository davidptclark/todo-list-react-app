import { useState } from 'react';
//Bringing in the add function
const Form = ({ setTodos, setStatus }) => {
  //The introduction of this new state allows for component to be controlled
  const [newTodo, setNewTodo] = useState('');

  //Keeping these functions here to access initial state of todos
  const addTodo = (newItem) => {
    setTodos((currList) => {
      //There's a package to generate random IDs but keeping it simple
      return [
        ...currList,
        { text: newItem, isComplete: false, id: Math.random() * 1000000 },
      ];
    });
  };

  const sumbitTodo = (event) => {
    event.preventDefault(); // Without this, new item appears then disappears after render
    if (!newTodo) {
      return; //Prevent empty items being added to to-do list
    } else {
      addTodo(newTodo);
      setNewTodo(''); //Resetting the state of form after submitting
    }
  };

  const filterToDos = (event) => {
    setStatus(event.target.value);
  };

  return (
    //While changes are being made to the state via onChange, onSubmit triggers the submitTodo function above, and in turn, addTodo with the value from the input below (newTodo)
    <form onSubmit={sumbitTodo}>
      <label>
        Add a new To-Do:
        <input
          className="todo-form"
          value={newTodo}
          //This onChange is reading the incoming changes via e.t.v and updating the state
          onChange={(event) => setNewTodo(event.target.value)}
        />
      </label>
      <button type="submit">Add To-Do </button>
      <select onChange={filterToDos} name="todos" className="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
};

export default Form;
