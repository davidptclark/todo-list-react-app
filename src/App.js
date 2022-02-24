import './App.css';
import Header from './Header';
import Form from './Form';
import TodoList from './Todo-list';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(['Buy coffee', 'Meet friend for dinner']);
  return (
    <div className="App">
      <Header />
      <Form setTodos={setTodos} />
      {/* Remember to keep the names consistent for prop reference! */}
      {/* Uses function from state to add tasks submitted via form */}
      <TodoList todos={todos} setTodos={setTodos} />
      {/* uses initial state to populate To-Do list */}
    </div>
  );
}

export default App;
