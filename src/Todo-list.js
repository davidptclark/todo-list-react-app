const TodoList = ({ todos, setTodos }) => {
  //Adding to the end of the array allows for easily removing using splice
  const removeToDo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <ul>
      {/* TODO: I think these would be better as separate divs for styling */}
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            {/* Using the index as key allows for dynamic reassignment as deleted within list, as well as being passed to the removeToDo function that will allow spice to easily access and remove the item */}
            {todo.text}
            {/* Allow for both completion and deletion */}
            <input type="checkbox" />
            <button onClick={() => removeToDo(index)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
