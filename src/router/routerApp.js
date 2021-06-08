import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Otro from "../screens/Otro/otro";
import Home from "../screens/Home/home";

export default function RouterApp() {
    return (
      <Router>
          <Switch>
            <Route path="/otro">
              <Otro></Otro>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
      </Router>
    );
  }