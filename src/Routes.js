import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import CardDetail from "./component/CardDetail/CardDetail";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' compoenent={App} />
          <Route exact path='/colors' component={App} />
          <Route exact path='/color/:id' component={CardDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
