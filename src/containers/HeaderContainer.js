import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import { AppBar } from "@material-ui/core";
import SearchBar from "../components/SearchBar";

class HeaderContainer extends Component {
  render() {
    const { URL } = this.props;
    return (
      <AppBar position="static" color="inherit">
        <Header URL={URL} />
        {URL === "/search" ? <SearchBar /> : ""}
      </AppBar>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  URL: ownProps.history.location.pathname,
});

export default withRouter(connect(mapStateToProps)(HeaderContainer));
