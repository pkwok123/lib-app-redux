import React from "react";

import { withStyles } from "@material-ui/core";

const styles = {
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
};

const InlineDotList = ({ children, classes }) => (
  <ul className={classes.ul}>{children}</ul>
);

export default withStyles(styles)(InlineDotList);
