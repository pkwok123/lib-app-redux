import React from "react";
import clsx from "clsx";
import { DialogContent, Grid, withStyles } from "@material-ui/core";

const styles = {
  contentContainer: {
    overflowY: "visible",
    paddingTop: 0,
    paddingBottom: 0,
  },
  fontJS: {
    fontFamily: "Josefin Slab",
  },
};

const ContentMain = ({ classes, children }) => (
  <DialogContent className={clsx(classes.contentContainer, classes.fontJS)}>
    <Grid
      container
      wrap="wrap"
      alignItems="center"
      direction="column"
      spacing={4}
      style={{ margin: 0, width: "100%" }} //fixes MuiGrid properties
    >
      <Grid item>{children}</Grid>
    </Grid>
  </DialogContent>
);

export default withStyles(styles)(ContentMain);
