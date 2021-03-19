/* withRouter(withWidth(Header)) Reason? 
Error: Functions are not valid as a React child. This may happen if you return a 
Component instead of <Component /> from render. Or maybe you meant to call this
 function rather than return it*/

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { Paper, styled, withStyles } from "@material-ui/core";

const PaperStyled = styled(({ URL, ...other }) => <Paper {...other} />)(
  ({ theme }) => ({
    position: "fixed",
    width: "100%",
    zIndex: 1,
    [theme.breakpoints.up(670)]: {
      // positions nav for web
      top: 0,
      boxShadow: (props) => {
        if (props.URL === "/search") return "none";
      },
    },
    [theme.breakpoints.down(670)]: {
      // positions nav for phones/small screens
      top: "none",
      bottom: 0,
    },
  })
);

const TabsStyled = withStyles((theme) => ({
  root: {
    paddingBottom: 5,
  },
  indicator: {
    [theme.breakpoints.down(670)]: {
      // reduces indicator for phone/small screens
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      "& > span": {
        maxWidth: 60,
        width: "100%",
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const TabStyled = withStyles((theme) => ({
  root: {
    textTransform: "none",
    fontFamily: "Caveat",
    fontWeight: "bold",
    fontSize: "1.3em",
  },
}))((props) => <Tab {...props} />);

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab(event, newValue) {
    if (newValue === "/search") {
      this.props.searchReset();
    }

    this.props.history.push(newValue);
  }

  render() {
    return (
      <PaperStyled square URL={this.props.URL}>
        <TabsStyled
          value={this.props.URL}
          onChange={this.handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <TabStyled label="Home" value="/home" icon={<HomeOutlinedIcon />} />
          <TabStyled
            label="Search"
            value="/search"
            icon={<SearchRoundedIcon />}
          />
          <TabStyled
            label="Cart"
            value="/cart"
            icon={<ShoppingCartOutlinedIcon />}
          />
          <TabStyled
            label="Settings"
            value="/settings"
            icon={<SettingsOutlinedIcon />}
          />
        </TabsStyled>
      </PaperStyled>
    );
  }
}

export default withRouter(Header);
