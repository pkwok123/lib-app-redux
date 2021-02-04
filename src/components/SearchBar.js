import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import withWidth from "@material-ui/core/withWidth";

import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";
import IconButton from "@material-ui/core/IconButton";
/* Tried to keep search components within searh container to make passing data easy but <AppBar> doesn't work separately */

import SvgIcon from "@material-ui/core/SvgIcon";
//import { mdiBarcodeScan } from "@mdi/js";
import Button from "@material-ui/core/Button";

import Filter from "./Filter";
import { fetchSearch, searchQuery } from "../actions";

const useStyles = withStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  paper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
    backgroundColor: "white",
  },
  barcodeBtn: {
    minWidth: 0,
  },
}));

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeQuery(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/search?q=${this.state.query}`);
    console.log(this.state.query);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <Grid container md={8} spacing={1} wrap="nowrap">
          <Grid item className={classes.grow}>
            <form onSubmit={this.handleSubmit}>
              <FormControl fullWidth variant="outlined">
                <OutlinedInput
                  placeholder="Search..."
                  value={this.state.query}
                  onChange={this.handleChangeQuery}
                  autoFocus
                  required
                  // startAdornment={
                  //   <InputAdornment position="start">
                  //     <SearchRoundedIcon />
                  //   </InputAdornment>
                  // }
                  endAdornment={
                    <InputAdornment>
                      <Button className={classes.barcodeBtn} color="primary">
                        <SvgIcon viewBox="0,0,24,24">
                          <path
                            fill="currentColor"
                            d="M4,6H6V18H4V6M7,6H8V18H7V6M9,6H12V18H9V6M13,6H14V18H13V6M16,6H18V18H16V6M19,6H20V18H19V6M2,4V8H0V4A2,2 0 0,1 2,2H6V4H2M22,2A2,2 0 0,1 24,4V8H22V4H18V2H22M2,16V20H6V22H2A2,2 0 0,1 0,20V16H2M22,20V16H24V20A2,2 0 0,1 22,22H18V20H22Z"
                          />
                        </SvgIcon>
                      </Button>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </form>
          </Grid>
          <Grid item>
            <Filter />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(useStyles(SearchBar));
