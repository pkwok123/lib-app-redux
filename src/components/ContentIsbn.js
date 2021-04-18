import React from "react";

import { Chip, withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const styles = {
  outlinedPrimary: {
    color: "white",
    border: "1px solid #ffffff",
  },
  clickableColorPrimary: {
    color: "white",
    backgroundColor: "#6b6b6b",
    border: "1px solid #6b6b6b",
  },
  deleteIconOutlinedColorPrimary: {
    color: "white",
  },
};

const ContentIsbn = ({ number, handleChipOnDelete, classes }) => (
  <Chip
    label={number}
    variant="outlined"
    color="primary" //uses primary properties to modify css, not material ui primary color
    clickable
    deleteIcon={<AddIcon />}
    onDelete={handleChipOnDelete}
    classes={{
      outlinedPrimary: classes.outlinedPrimary,
      clickableColorPrimary: classes.clickableColorPrimary,
      deleteIconOutlinedColorPrimary: classes.deleteIconOutlinedColorPrimary,
    }}
  />
);

export default withStyles(styles)(ContentIsbn);
