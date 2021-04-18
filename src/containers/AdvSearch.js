import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Drawer } from "@material-ui/core";

import SelectFormat from "../components/SelectFormat";

class AdvSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isOpen, handleClose } = this.props;
    return <Drawer>hi</Drawer>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // React Router does not parse query strings anymore
  const URL = ownProps.location.pathname;
  const params = new URLSearchParams(ownProps.location.search);
  const queryStr = params.get("q");

  return {
    URL,
    queryStr,
  };
};

export default withRouter(connect(mapStateToProps, null)(AdvSearchContainer));
