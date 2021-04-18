import React from "react";

import { Button, withTheme } from "@material-ui/core";

const AdvSearchBtn = ({ handleClick, theme }) => (
  <Button style={{ margin: theme.spacing(2) }} onClick={handleClick}>
    Advance Search
  </Button>
);

export default withTheme(AdvSearchBtn);
