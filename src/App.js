import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/detail/:id">
          <Detail />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
