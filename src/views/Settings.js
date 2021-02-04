import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import withWidth from "@material-ui/core/withWidth";

class Settings extends Component {
  render() {
    const { width } = this.props;

    return <h1>Settings</h1>;
  }
}

export default withRouter(withWidth()(Settings));
