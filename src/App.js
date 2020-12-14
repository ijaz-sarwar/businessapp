import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch, Redirect } from 'react-router-dom';
import AppLayout from './components/Layout';
import MainApp from "./MainApp"
import $ from "jquery";
class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <Router>
        <Suspense>
          <Switch>
            <Route
              path={`/`}
              render={props => <MainApp {...props} />}
            />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
