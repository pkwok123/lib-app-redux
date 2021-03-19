import React, { Component } from "react";
import clsx from "clsx";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import {
  Badge,
  Box,
  Chip,
  DialogActions,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
  withStyles,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import withWidth from "@material-ui/core/withWidth";

const styles = {
  dialogContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  actionsContainer: {
    justifyContent: "flex-start",
  },
  contentContainer: {
    overflowY: "visible",
    paddingTop: 0,
    paddingBottom: 0,
  },
  title: {
    paddingBottom: "5px",
    textAlign: "center",
  },
  tabsContainer: {
    color: "white",
    background: "#80cbc4",
    flexGrow: 50,
  },
  tabCart: {
    paddingTop: "6px",
  },
  details: {
    paddingTop: "10px",
    paddingBottom: "20px",
    textAlign: "center",
  },
  fontFTG: {
    fontFamily: "Fredericka the Great",
  },
  fontJS: {
    fontFamily: "Josefin Slab",
  },
  ul: {
    listStyle: "none",
    paddingLeft: 0,
    paddingTop: "20px",
    display: "inline",
    "& li": {
      display: "inline",
      "& + li:before": {
        content: `"\u00A0\u00A0\u2022\u00A0\u00A0"`,
        //fontSize: "80px",
        // [material ui] content: `"some content`"
        // enconding C/C++/Java source code works but "\A0\A0\2022\A0\A0" doesn't
      },
    },
  },
  li: {
    textTransform: "capitalize",
  },
  indicator: {
    backgroundColor: "white",
  },
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

const StyledBadge = withStyles({
  badge: {
    top: 17,
    right: -40,
    backgroundColor: "#6b6b6b",
  },
})(Badge);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ContentDialog = ({ open, handleOnClose, content, width, children }) => {
  return (
    <Dialog
      scroll="body"
      open={open}
      onClose={handleOnClose}
      fullScreen={width === "xs" ? true : false}
    >
      {children}
    </Dialog>
  );
};

export default withWidth()(withStyles(styles)(ContentDialog));
