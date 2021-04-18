import React, { Component } from "react";
//theme
import theme from "../Theme";
import withStyles from "@material-ui/core/styles/withStyles";
//drawer
import Drawer from "@material-ui/core/Drawer";
//select
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
//toggle
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
//icons
import IconButton from "@material-ui/core/IconButton";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ViewListIcon from "@material-ui/icons/ViewList";
import AdvSearch from "./AdvSearch";

import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = withStyles({
  container: {
    margin: theme.spacing(1),
  },
  containerAdvBtn: {
    margin: theme.spacing(3),
  },
  containerCloseBtn: {
    display: "flex",
    justifyContent: "center",
    padding: 10,

    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
      //sm: 11,
    },
  },
});

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isAdvSearchBtn: false,
      sortA_ZValue: "relevance",
      sortTypeValue: "all",
      searchViewValue: "module",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickAdvSearchBtn = this.handleClickAdvSearchBtn.bind(this);
  }

  handleClick(event) {
    this.setState({ isOpen: true });
  }
  handleClose(event) {
    this.setState({ isOpen: false });
  }

  handleChange(event, viewValue) {
    if (viewValue === undefined) {
      viewValue = this.props.filterInput[2];
    }
    this.setState(
      {
        ...this.state,
        [event.target.name]: event.target.value,
        searchViewValue: viewValue,
      },
      () => {
        const filterValue = [
          this.state.sortA_ZValue,
          this.state.sortTypeValue,
          this.state.searchViewValue,
        ];
        this.props.handleFilterInput(filterValue);
      }
    );
  }
  handleClickAdvSearchBtn() {
    this.setState({ isAdvSearchBtn: !this.state.isAdvSearchBtn });
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.container}>
          <span
            //display={this.state.isAdvSearchBtn ? "flex" : "none"}
            className={classes.containerCloseBtn}
          >
            <Fade in={this.state.isAdvSearchBtn}>
              <Button size="small" color="inherit" onClick={this.handleClose}>
                <CloseRoundedIcon />
              </Button>
            </Fade>
          </span>
          <Grid container alignItems="center" justify="center">
            <Grid item>
              <Grid container justify="center" wrap="nowrap">
                <Grid item className={classes.container}>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-sort-native-simple">
                      Sort
                    </InputLabel>
                    <Select
                      native
                      //value={this.props.filterInput[0]}
                      onChange={this.handleChange}
                      label="Sort"
                      inputProps={{
                        name: "sortA_ZValue",
                        id: "outlined-sort-native-simple",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={"relevance"}>Relevance</option>
                      <option value={"ratingAmazon"}>Rating - Amazon</option>
                      <option value={"title"}>Title</option>
                      <option value={"author"}>Author</option>
                      <option value={"subject"}>Subject</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item className={classes.container}>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-type-native-simple">
                      Type
                    </InputLabel>
                    <Select
                      native
                      //value={this.props.filterInput[1]}
                      onChange={this.handleChange}
                      label="Type"
                      inputProps={{
                        name: "sortTypeValue",
                        id: "outlined-type-native-simple",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={"all"}>All</option>
                      <option value={"book"}>Books</option>
                      <option value={"dvd"}>DVDs</option>
                      <option value={"cd"}>CDs</option>
                      <option value={"misc"}>Misc</option>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.container}>
              <ToggleButtonGroup
                //value={this.props.filterInput[2]}
                name="searchViewValue"
                exclusive
                onChange={this.handleChange}
                aria-label="searchViewValue"
              >
                <ToggleButton value="module" aria-label="module">
                  <ViewModuleIcon />
                </ToggleButton>
                <ToggleButton value="list" aria-label="list">
                  <ViewListIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </div>
        <Button
          className={classes.containerAdvBtn}
          onClick={this.handleClickAdvSearchBtn}
        >
          Advance Search
        </Button>
        <AdvSearch
          className={classes.container}
          isOpen={this.state.isAdvSearchBtn}
        />
      </React.Fragment>
    );
  }
}

export default useStyles(Filter);
