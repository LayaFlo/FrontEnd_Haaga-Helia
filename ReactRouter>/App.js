import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  
  
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
          <Route path="/contact" render={() => <h1>Contact address</h1>} /> 
          <Route render={() => <h1>Page not found</h1>} /> 
        </Switch> 
        </div>
      </Router>
    </div>
  );
}

export default App;
