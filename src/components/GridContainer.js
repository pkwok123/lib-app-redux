import React from "react";
import { Grid } from "@material-ui/core";

const GridContainer = ({ spacing, children }) => (
  <Grid
    container
    justify="center"
    spacing={spacing}
    style={{ width: "100%", margin: 0 }}
  >
    {children}
  </Grid>
);

export default GridContainer;
