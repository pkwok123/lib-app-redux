import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import withWidth from "@material-ui/core/withWidth";

class Home extends Component {
  render() {
    const { width } = this.props;

    return <h1>Home</h1>;
  }
}

export default withRouter(withWidth()(Home));
