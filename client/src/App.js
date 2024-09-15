import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BubblePage from './components/BubblePage';
import PrivateRoute from './utils/PrivateRoute';
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (  
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path='/bubbles' component={BubblePage} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
