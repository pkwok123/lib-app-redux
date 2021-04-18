import React from "react";

import { Typography, withStyles } from "@material-ui/core";

const styles = {
  fontFTG: {
    fontFamily: "Fredericka the Great",
  },
};

const ContentMoreDetails = ({
  series,
  publishName,
  publishYear,
  children,
  classes,
}) => (
  <Typography component="div" variant="body1" className={classes.fontFTG}>
    {series !== "None" ? `Series: ${series}` : null}
    {`Publisher: ${publishName}`}
    {` (${publishYear})`}
    <br />
    {`Subject: `}
    {children}
  </Typography>
);

export default withStyles(styles)(ContentMoreDetails);
