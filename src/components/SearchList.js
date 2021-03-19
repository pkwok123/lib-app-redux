import { Grid } from "@material-ui/core";
import React from "react";

const gridStyle = {
  paddingTop: "5vh",
  margin: "-16px", // Fixes the MuiGrid-spacing-xs-2 {width: calc(100%+16px)}
};

const SearchList = ({ children }) => (
  <Grid container style={gridStyle} justify="center" spacing={2}>
    {children}
  </Grid>
);

export default SearchList;
