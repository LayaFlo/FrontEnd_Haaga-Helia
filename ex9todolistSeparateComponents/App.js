import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const deleteTodo = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    setTodos(todos.filter((todo, index) => parseInt(event.target.id) !== index));
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }
  
  return (
    <div className="App">
      <header className="App-header">Simple TodoList</header> 
      <form onSubmit={addTodo}>
        Description: <input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
        Date: <input type="date" name="date" onChange={inputChanged} value={todo.date}/>
        <input type="submit" value="Add"/>

      <TodoTable todos={todos} deleteTodo={deleteTodo}/>

      </form>
    </div>
        
  );
}

export default App;
