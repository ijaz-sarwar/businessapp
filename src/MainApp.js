import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Routes from './pages';
import AppLayout from "./components/Layout"


class App extends Component {
  render() {
    const { match } = this.props;
    console.log(match, 'match is the ');
    
    return (
      <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
         <Routes {...this.props} />
        </Suspense>
      </div>
    </AppLayout>
     
    );
  }
}

export default withRouter(App);
