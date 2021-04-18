import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "../Theme.js";
import Header from "./Header";
import Home from "./Home";
import Settings from "./Settings";
import Cart from "../components/CartItem";
import Search from "./Search";
import SnackbarBtnBlack from "../components/SnackbarBtnBlack";
import { getErrorMessage } from "../reducers/error";
import { resetErrorMessage } from "../actions";

class App extends Component {
  renderErrorMessage() {
    const { errorMessage, resetErrorMessage } = this.props;
    if (!errorMessage) {
      return null;
    }
    return (
      <SnackbarBtnBlack
        severity="error"
        title="ERROR"
        message={errorMessage}
        btnName="Report"
        resetMessage={resetErrorMessage}
      />
    );
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Switch>
          <Redirect exact from="/" to="/search" />
          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/cart" component={Cart} />
          <Route path="/settings" component={Settings} />
          <Route path="*" to="/home" />
        </Switch>
        {this.renderErrorMessage()}
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  errorMessage: getErrorMessage(state),
});

export default connect(mapStateToProps, { resetErrorMessage })(App);
