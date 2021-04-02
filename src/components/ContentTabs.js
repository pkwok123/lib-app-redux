import React from "react";
import clsx from "clsx";

import { Badge, DialogContent, Tab, Tabs, withStyles } from "@material-ui/core";

const styles = {
  contentContainer: {
    overflowY: "visible",
    paddingTop: 0,
    paddingBottom: 0,
  },
  tabsContainer: {
    color: "white",
    background: "#80cbc4",
    flexGrow: 50,
  },
  indicator: {
    backgroundColor: "white",
  },
  tabCart: {
    paddingTop: "6px",
  },
};

const StyledBadge = withStyles({
  badge: {
    top: 17,
    right: -40,
    backgroundColor: "#6b6b6b",
  },
})(Badge);

const ContentTabs = ({ valueTabs, handleTabsChange, classes, children }) => (
  <DialogContent
    className={clsx(classes.contentContainer, classes.tabsContainer)}
  >
    <Tabs
      value={valueTabs}
      variant="fullWidth"
      onChange={handleTabsChange}
      classes={{ indicator: classes.indicator }}
    >
      <Tab
        label="Cart"
        icon={<StyledBadge badgeContent={0} showZero />}
        id={0}
        className={classes.tabCart}
      />
      <Tab label="Details" id={1} />
    </Tabs>
    {children}
  </DialogContent>
);

export default withStyles(styles)(ContentTabs);
