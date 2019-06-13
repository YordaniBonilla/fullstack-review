import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import CreateTodo from '../components/CreateTodo'
import EditTodo from '../components/EditTodo'
import TodosList from '../components/TodosList'
function App() {
  return (
    <Router>
      <div className="container">
        <h2>Mern-Stack Todo App</h2>
      </div>
      <Router path="/" exact component={ TodosList }/>
      <Router path="/edit/:id" component={ EditTodo }/>
      <Router path="/create" component={ CreateTodo }/>
    </Router>
  );
}

export default App;
