import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";
import Main from "./components/Main";
import Personal from "./components/Personal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/slate/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <Personal />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
