import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/home.page";
import { ReactComponent as Logo } from "./images/CatwikiLogo.svg";

function App() {
  return (
    <div className="App">
      <Logo />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
