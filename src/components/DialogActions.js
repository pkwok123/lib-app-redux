import React from "react";

import { DialogActions, IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

const MyDialogActions = ({ handleOnClose }) => (
  <DialogActions style={{ justifyContent: "flex-start" }}>
    <IconButton onClick={handleOnClose}>
      <ArrowBack color="black" />
    </IconButton>
  </DialogActions>
);

export default MyDialogActions;
