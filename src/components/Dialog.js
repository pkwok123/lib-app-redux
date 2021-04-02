import React from "react";

import { Dialog, withWidth } from "@material-ui/core";

const dialogContainer = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const MyDialog = ({ open, handleOnClose, width, children }) => (
  <Dialog
    scroll="body"
    open={open}
    onClose={handleOnClose}
    fullScreen={width === "xs" ? true : false}
  >
    <div style={dialogContainer}>{children}</div>
  </Dialog>
);

export default withWidth()(MyDialog);
