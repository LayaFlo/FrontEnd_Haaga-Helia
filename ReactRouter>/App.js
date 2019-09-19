import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
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
      <h1>Welcome to React Router</h1> 
      <Router>
      <div> 
        <Link to="/">Home</Link>{' '} 
        <Link to="/about">About</Link>{' '} 
        <Link to="/contact">Contact</Link>{' '} 
        <Switch> 
          <Route exact path="/" component={Home} /> 
          <Route path="/about" component={About} /> 
          <Route path="/contact" render={() => 
                <div className="App">
                <header className="App-header">Simple TodoList</header> 
                <form onSubmit={addTodo}>
                <h2>Add todo: </h2> 
                Description: <input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
                Date: <input type="date" name="date" onChange={inputChanged} value={todo.date}/>
                <input type="submit" value="Add"/>
     
                <TodoTable todos={todos} deleteTodo={deleteTodo}/>
                </form>
      
                </div>} /> 
          <Route render={() => <h1>Page not found</h1>} /> 
        </Switch> 
        </div>
      </Router>
    </div>
  );
}

export default App;
