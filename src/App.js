import './App.css';
import Header from './Header';
import Form from './Form';
import TodoList from './Todo-list';
import { useState, useEffect } from 'react';

//TODO: I'd like to include editing at some point but seems difficult. Why? To give the user the ability to edit, a new text box would need to appear (priority ordering)

function App() {
  //Initial state of to-do is best placed here
  //Set up with objects for each item, with a key of text to ease manipulation when we add complexity to the app later
  const [todos, setTodos] = useState([]);
  //State for checking task status
  const [status, setStatus] = useState('all');
  //State for filtering tasks without deleting those that don't meet filter reqs
  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(() => {
    //Placing function here to prevent missing dep. warning in console
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredToDos(todos.filter((todo) => todo.isComplete === true));
          break;
        case 'uncompleted':
          setFilteredToDos(todos.filter((todo) => todo.isComplete === false));
          break;
        default:
          setFilteredToDos(todos);
      }
    };

    filterHandler();
    //The array contains variables that, when changed, triggers useEffect to re-render
  }, [todos, status]);

  return (
    <div className="App">
      <Header />
      <Form setTodos={setTodos} setStatus={setStatus} />
      {/* Remember to keep the names consistent for prop reference! */}
      {/* Uses function from state to add tasks submitted via form */}
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredToDos={filteredToDos}
      />
      {/* uses initial state to populate To-Do list */}
    </div>
  );
}

export default App;
