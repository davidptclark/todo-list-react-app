const TodoList = ({ todos, setTodos }) => {
  //Adding to the end of the array allows for easily removing using splice
  const removeToDo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <>
      {todos.map((todo, index) => {
        return (
          /* Made into div to allow for box styling */
          <>
            <div class="todo-items" key={index}>
              {/* Using the index as key allows for dynamic reassignment as deleted within list, as well as being passed to the removeToDo function that will allow spice to easily access and remove the item */}
              {todo.text}
              {/* Allow for both completion and deletion */}
              <div class="buttons">
                <input type="checkbox" id="checkbox" />
                <button id="submit" onClick={() => removeToDo(index)}>
                  Delete
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default TodoList;
