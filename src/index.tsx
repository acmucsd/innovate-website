import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.less";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "pages/Home";
import Standard from 'pages/Standard';
import Contact from "components/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/standard" exact>
            <Standard />
          </Route>
        </Switch>
        <Contact />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
