import React, { Component } from "react";
import { withRouter} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

class AppLayout extends Component {
  render() {
    const { containerClassnames } = this.props;
    return (
      <div id="app-container" className={containerClassnames}>
        <Header history={this.props.history} />
        <main>
          <div className="container-fluid">
          {this.props.children}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(AppLayout);
