import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import HomePage from './home';


class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <Suspense>
      <Switch>
              <Redirect
                exact
                from={`${match.url}/home`}
                to={`${match.url}/`}
              />
              <Route
                path={`${match.url}/`}
                render={props => <HomePage {...props} />}
              />
              
              <Redirect to="/error" />
            </Switch>
          </Suspense>
    );
  }
}

export default withRouter(App);
