import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import CreateTodo from './components/CreateTodo'
import EditTodo from './components/EditTodo'
import TodosList from './components/TodosList'

function App() {
  return (
    <Router>
      <div className="container">
        <h2>Mern-Stack Todo App</h2>
        <Route path="/" exact component={ TodosList }/>
        <Route path="/edit/:id" component={ EditTodo }/>
        <Route path="/create" component={ CreateTodo }/>
      </div>

    </Router>
  );
}

export default App;
