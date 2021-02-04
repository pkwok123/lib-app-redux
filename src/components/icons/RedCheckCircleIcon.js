import React, { Component } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const StyledCheckCircleIcon = withStyles((theme) => ({
  position: "relative",
  zIndex: 2,
  color: theme.palette.secondary.main,
}))(CheckCircleIcon);

const iconBackground = {
  borderRadius: "50%",
  height: 15,
  width: 15,
  position: "relative",
  zIndex: 1,
  left: 78,
  bottom: 31,
};

export default class RedCheckCircleIcon extends Component {
  render() {
    return (
      <span style={iconBackground}>
        <StyledCheckCircleIcon />
      </span>
    );
  }
}

// const StyledCheckCircleIcon = withStyles((theme) => ({
//   position: "relative",
//   zIndex: 2,
//   left: 35,
//   bottom: 50,
//   color: theme.palette.secondary.main,
// }))(CheckCircleIcon);

// const iconBackground = {
//   backgroundColor: theme.palette.common.white,
//   borderRadius: "50%",
//   height: 15,
//   width: 15,
//   position: "relative",
//   zIndex: 1,
//   left: 78,
//   bottom: 31,
// };
