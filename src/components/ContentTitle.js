import React from "react";
import clsx from "clsx";
import { Typography, withStyles } from "@material-ui/core";

const styles = {
  title: {
    paddingBottom: "5px",
    textAlign: "center",
  },
  fontFTG: {
    fontFamily: "Fredericka the Great",
  },
};

const ContentTitle = ({ classes, content }) => (
  <Typography variant="h2" className={clsx(classes.title, classes.fontFTG)}>
    {content.title}
  </Typography>
);

export default withStyles(styles)(ContentTitle);
