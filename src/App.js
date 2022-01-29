import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import SingleCharacter from "./components/SingleCharacter/SingleCharacter";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path = "/profile/:id">
            <SingleCharacter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
