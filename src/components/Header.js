/* Header without search bar*/
/* withRouter(withWidth(Header)) Reason? 
Error: Functions are not valid as a React child. This may happen if you return a 
Component instead of <Component /> from render. Or maybe you meant to call this
 function rather than return it*/

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import withWidth from "@material-ui/core/withWidth";

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab(event, newValue) {
    this.props.history.push(newValue);
  }

  render() {
    // const { width } = this.props;
    return (
      <Tabs
        value={this.props.URL}
        onChange={this.handleChangeTab}
        //variant={width === "sm" || width === "xs" ? "fullWidth" : "standard"}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" value="/home" icon={<HomeIcon />} />
        <Tab label="Search" value="/search" icon={<SearchRoundedIcon />} />
        <Tab label="Cart" value="/cart" icon={<ShoppingCartOutlinedIcon />} />
        <Tab
          label="Settings"
          value="/settings"
          icon={<SettingsOutlinedIcon />}
        />
      </Tabs>
    );
  }
}

export default withRouter(Header);
