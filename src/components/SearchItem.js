import React from "react";
import { Grid, Grow, Paper } from "@material-ui/core";
import { getNoResults } from "../reducers/search";

const imgStyle = {
  height: 140,
  width: 100,
};

const SearchItem = ({ result, index, handleImgClick }) => (
  <Grid item>
    <Grow in={true} timeout={1000 + 100 * index}>
      <Paper style={imgStyle} elevation={4}>
        <img
          alt={result.title}
          style={imgStyle}
          id={result._id}
          src={result.cover_url}
          onClick={handleImgClick}
        />
      </Paper>
    </Grow>
  </Grid>
);

export default SearchItem;
