import React from "react";
import clsx from "clsx";

import { Typography, withStyles } from "@material-ui/core";

const styles = {
  details: {
    paddingTop: "10px",
    paddingBottom: "20px",
    textAlign: "center",
  },
  fontJS: {
    fontFamily: "Josefin Slab",
  },
};
const ContentDetails = ({ children, classes }) => (
  <Typography
    variant="h6"
    color="textPrimary"
    className={clsx(classes.details, classes.fontJS)}
  >
    {children}
  </Typography>
);

export default withStyles(styles)(ContentDetails);
