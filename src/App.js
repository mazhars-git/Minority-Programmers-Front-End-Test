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
import CardDashboard from "./components/CardDashboard/CardDashboard/CardDashboard";

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
        <Route path="/cardDashboard/:id">
            <CardDashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
