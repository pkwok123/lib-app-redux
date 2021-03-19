import React, { Component } from "react";
import { Snackbar, Button, withStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const useStyles = withStyles({
  root: {
    backgroundColor: "black",
    flexGrow: 1,
    minWidth: 260,
  },
});

class SnackbarBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ open: false });
    this.props.resetMessage();
  }

  render() {
    const { severity, title, message, btnName, classes } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={this.state.open}
        autoHideDuration={30000} // 30secs
        onClose={this.handleClose}
      >
        <Alert
          severity={severity}
          elevation={6}
          variant="filled"
          action={
            <Button variant="outlined" color="secondary" size="small">
              {btnName}
            </Button>
          }
          className={classes.root}
        >
          {`${title} - ${message}`}
        </Alert>
      </Snackbar>
    );
  }
}

export default useStyles(SnackbarBtn);
