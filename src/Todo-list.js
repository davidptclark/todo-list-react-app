import { RiCloseCircleLine } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';

const TodoList = ({ todos, setTodos, filteredToDos }) => {
  //Adding to the end of the array allows for easily removing using splice
  const removeToDo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeToDo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        }
        return todo;
      })
    );
  };

  return (
    <>
      {filteredToDos.map((todo, index) => {
        return (
          /* Made into div to allow for box styling */
          <>
            {/* Using JS to toggle class name based on use boolean of isComplete, to apply line-through styling */}
            <div
              className={`todo-item ${todo.isComplete ? 'completed' : ''}`}
              key={index}
            >
              {/* Using the index as key allows for dynamic reassignment as deleted within list, as well as being passed to the removeToDo function that will allow spice to easily access and remove the item */}
              {todo.text}
              {/* Allow for both completion and deletion */}
              <div className="buttons" key={index}>
                <TiTick id="completed" onClick={() => completeToDo(todo.id)} />
                <RiCloseCircleLine
                  id="submit"
                  onClick={() => removeToDo(index)}
                />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default TodoList;
