import { Grid } from "@material-ui/core";
import React from "react";

const gridStyle = {
  paddingTop: "5vh",
};

const SearchList = ({ children }) => (
  <Grid container style={gridStyle} justify="center" spacing={2}>
    {children}
  </Grid>
);

export default SearchList;
