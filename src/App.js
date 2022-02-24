import './App.css';
import Header from './Header';
import TodoList from './Todo-list';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(['Buy coffee', 'Meet friend for dinner']);
  return (
    <div className="App">
      <Header />
      {/* we'll come back to the form tomorrow - setToDo will but passed into Form */}
      <TodoList todos={todos} />{' '}
      {/* uses initial state to populate To-Do list */}
    </div>
  );
}

export default App;
