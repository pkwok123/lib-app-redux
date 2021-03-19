import React from "react";

import { Grid, IconButton, Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";

const ContentUser = ({ content }) => (
  <Grid container alignItems="center" justify="center">
    <Grid item style={{ padding: 12, paddingTop: 16 }}>
      <Typography
        variant="h6"
        color="textPrimary"
        style={{ fontFamily: "Josefin Slab" }}
      >
        AR{content.rating.amazon}
      </Typography>
    </Grid>
    <Grid item>
      <IconButton>
        <FavoriteBorderIcon />
      </IconButton>
    </Grid>
    <Grid item>
      <IconButton>
        <ThumbUpOutlinedIcon />
      </IconButton>
    </Grid>
    <Grid item>
      <IconButton>
        <ThumbDownOutlinedIcon />
      </IconButton>
    </Grid>
  </Grid>
);

export default ContentUser;
