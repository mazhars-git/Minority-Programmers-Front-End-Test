import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home/Home";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// <FontAwesomeIcon icon={faCoffee} />

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
            <Home />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
