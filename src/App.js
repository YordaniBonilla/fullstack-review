import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import CreateTodo from './components/CreateTodo'
import EditTodo from './components/EditTodo'
import TodosList from './components/TodosList'
import logo from './freepik.jpg'

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            <img src={logo} width="30" height="30" alt="Learning to coooode" />
          </a>
          <Link to="/" className="navbar-brand">Mern-Stack Todo App</Link>
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li>
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </div>      
        </nav>

        <Route exact path="/" component={ TodosList }/>
        <Route path="/edit/:id" component={ EditTodo }/>
        <Route path="/create" component={ CreateTodo }/>
      </div>

    </Router>
  );
}
 
export default App;
