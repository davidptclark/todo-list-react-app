const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <li key={todo}>
            {todo}
            <input type="checkbox" />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
