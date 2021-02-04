import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./containers/HeaderContainer";
import Home from "./views/Home";
import Settings from "./views/Settings";
import CartItem from "./components/CartItem.js";
import Search from "./containers/SearchContainer.js";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Switch>
          <Redirect exact from="/" to="/search" />
          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/cart" component={CartItem} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </ThemeProvider>
    );
  }
}

export default App;
