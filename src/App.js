import './App.css';
import Header from './Header';
import Form from './Form';
import TodoList from './Todo-list';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy coffee' },
    { text: 'Meet friend for dinner' },
  ]); //Initial state of to-do is best placed here

  //Keeping these functions here to access initial state of todos
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  //Adding to the end of the array allows for easily removing using splice
  const removeToDo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Header />
      <Form addTodo={addTodo} />
      {/* Remember to keep the names consistent for prop reference! */}
      {/* Uses function from state to add tasks submitted via form */}
      <TodoList todos={todos} removeToDo={removeToDo} />
      {/* uses initial state to populate To-Do list */}
    </div>
  );
}

export default App;
