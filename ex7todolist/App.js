import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
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
      </form>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {todos.map((todo, index) => <tr key={index}><td>{todo.date}</td><td>{todo.desc}</td></tr>)}  
      </tbody></table>
    </div>
  );
}

export default App;
