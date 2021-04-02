import React from "react";

import { Typography } from "@material-ui/core";

const ContentSummary = ({ summary }) => (
  <Typography
    variant="h6"
    color="textPrimary"
    style={{ fontFamily: "Josefin Slab" }}
  >
    {summary}
  </Typography>
);

export default ContentSummary;
