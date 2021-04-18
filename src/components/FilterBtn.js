import React from "react";

import { IconButton } from "@material-ui/core";
import { FilterListRounded } from "@material-ui/icons";

const FilterBtn = ({ handleClick }) => (
  <IconButton
    color="inherit"
    aria-label="filterBtn"
    name="filterBtn"
    onClick={handleClick}
  >
    <FilterListRounded />
  </IconButton>
);

export default FilterBtn;
