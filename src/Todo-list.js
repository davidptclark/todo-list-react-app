const TodoList = ({ todos, removeToDo }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            {todo.text}
            <button onClick={() => removeToDo(index)}>x</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
