const TodoList = ({ todo, index, removeToDo }) => {
  return (
    <ul>
      <li key={index}>
        {todo.text}
        <button onClick={() => removeToDo(index)}>x</button>
      </li>
    </ul>
  );
};

export default TodoList;
