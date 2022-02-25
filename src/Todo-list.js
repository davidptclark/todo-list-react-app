import { RiCloseCircleLine } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';

const TodoList = ({ todos, setTodos, filteredToDos }) => {
  //Adding to the end of the array allows for easily removing using splice
  const removeToDo = (index) => {
    setTodos((currList) => {
      const newTodos = [...currList];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    });
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
      <div key="todo-list" className="container" id="todo-list">
        <ul>
          {filteredToDos.map((todo, index) => {
            return (
              /* Made into div to allow for box styling */
              <>
                {/* Using JS to toggle class name based on use boolean of isComplete, to apply line-through styling */}
                <li
                  className={`todo-item ${todo.isComplete ? 'completed' : ''}`}
                  key={`item-${index}`}
                >
                  {/* Using the index as key allows for dynamic reassignment as deleted within list, as well as being passed to the removeToDo function that will allow spice to easily access and remove the item */}
                  {todo.text}
                  {/* Allow for both completion and deletion */}
                  <div key={`buttons-${index}`} className="buttons">
                    <TiTick
                      key={`completed-${index}`}
                      id="completed"
                      onClick={() => completeToDo(todo.id)}
                    />
                    <RiCloseCircleLine
                      key={`submit-${index}`}
                      id="submit"
                      onClick={() => removeToDo(index)}
                    />
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
