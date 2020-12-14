import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import AboutUs from './aboutus';
import HomePage from './home';
<<<<<<< HEAD
import SendUs from './send';
=======
import Fees from './fees';
import Help from './help';
>>>>>>> e0ea101628185145bf770ab71ceea4f89b90d765


class App extends Component {
  render() {
    const { match } = this.props;
    console.log(match.url, 'match.url match.url', `${match.url}/about-us`);

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
          <Route
            path={`${match.url}about-us`}
            render={props => <AboutUs {...props} />}
          />
          <Route
            path={`${match.url}send-us`}
            render={props => <SendUs {...props} />}
          />


<Route
            path={`${match.url}fees`}
            render={props => <Fees {...props} />}
          />


<Route
            path={`${match.url}help`}
            render={props => <Help {...props} />}
          />

          {/* <Redirect to="/error" /> */}
        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(App);
