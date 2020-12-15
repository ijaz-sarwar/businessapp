import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import AboutUs from './aboutus';
import HomePage from './home';
import SendUs from './send';
import Fees from './fees';
import Help from './help';
import Recieve from './recieve';
import LogIn from './loginnn/login';
import LogIn2 from './loginnn/login2';
import LogIn3 from './loginnn/login3';
import SignIn from './signinnn/signin';
import SignIn2 from './signinnn/signin2';
import SignIn3 from './signinnn/signin3';
import HeaderDark from './features/header/headerdark';
import HeaderPrimary from './features/header/headerprimary';
import HeaderTransparent from './features/header/headertransparent';
import LightverSion from './features/navigationdropdown/lightversion';
import Darkversion from './features/navigationdropdown/darkversion';
import Primaryversion from './features/navigationdropdown/primaryversion';
import Alternateversion from './features/secondnavigation/alternateversion';
import Defaultversion from './features/secondnavigation/defaultversion';


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
          <Route
            path={`${match.url}recieve`}
            render={props => <Recieve {...props} />}
          />
          <Route
            path={`${match.url}login`}
            render={props => <LogIn {...props} />}
          />
          <Route
            path={`${match.url}login2`}
            render={props => <LogIn2 {...props} />}
          />
          <Route
            path={`${match.url}login3`}
            render={props => <LogIn3 {...props} />}
          />
          <Route
            path={`${match.url}signin`}
            render={props => <SignIn {...props} />}
          />
          <Route
            path={`${match.url}signin2`}
            render={props => <SignIn2 {...props} />}
          />
          <Route
            path={`${match.url}signin3`}
            render={props => <SignIn3 {...props} />}
          />
          <Route
            path={`${match.url}headerdark`}
            render={props => <HeaderDark{...props} />}
          />
          <Route
            path={`${match.url}headerprimary`}
            render={props => <HeaderPrimary{...props} />}
          />
          <Route
            path={`${match.url}headertransparent`}
            render={props => <HeaderTransparent{...props} />}
          />
          <Route
            path={`${match.url}lightversion`}
            render={props => <LightverSion{...props} />}
          />
          <Route
            path={`${match.url}darkversion`}
            render={props => <Darkversion{...props} />}
          />
          <Route
            path={`${match.url}primaryversion`}
            render={props => <Primaryversion{...props} />}
          />
          <Route
            path={`${match.url}alternateversion`}
            render={props => <Alternateversion{...props} />}
          />
          <Route
            path={`${match.url}defaultversion`}
            render={props => <Defaultversion{...props} />}
          />



          {/* <Redirect to="/error" /> */}
        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(App);
