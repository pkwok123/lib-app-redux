import React, { Component, createRef } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core";
import Theme from "../Theme";

const useStyles = withStyles({
  paper: {
    backgroundColor: Theme.palette.backgroundColor,
  },
});

class SplitButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedIndex: 0,
    };

    this.anchorRef = createRef(null);
    this.handleClick = this.handleClick.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    console.info(`You clicked ${this.props.options[this.state.selectedIndex]}`);
  }

  handleMenuItemClick(event, index) {
    this.setState({ selectedIndex: index, open: false });
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose(event) {
    if (
      this.anchorRef.current &&
      this.anchorRef.current.contains(event.target)
    ) {
      return;
    }

    this.setState({ open: false });
  }
  render() {
    const { open, selectedIndex } = this.state;
    const { classes, options } = this.props;

    const btnColor =
      options[0] === "Available" ||
      options[0] === "Request" ||
      options[0] === "Details"
        ? "primary"
        : "secondary";

    return (
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <ButtonGroup
            variant="contained"
            color={btnColor}
            ref={this.anchorRef}
            aria-label="split button"
          >
            <Button size="small" onClick={this.handleClick}>
              {options[selectedIndex]}
            </Button>
            <Button
              color={btnColor}
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={this.handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            open={open}
            anchorEl={this.anchorRef.current}
            role={undefined}
            transition
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList id="split-button-menu">
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          //disabled={index === 2}
                          selected={index === selectedIndex}
                          onClick={(event) =>
                            this.handleMenuItemClick(event, index)
                          }
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Grid>
      </Grid>
    );
  }
}

export default useStyles(SplitButton);
