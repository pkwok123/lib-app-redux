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

class ContentDialog extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleTabsChange = this.handleTabsChange.bind(this);
  }

  handleDelete() {
    console.info("You clicked the delete icon.");
  }

  handleTabsChange(event, newValue) {
    this.props.passTabsValue(newValue);
  }

  render() {
    const { open, content, handleOnClose, classes, width } = this.props;
    return content ? (
      <Dialog
        scroll="body"
        open={open}
        onClose={handleOnClose}
        fullScreen={width === "xs" ? true : false}
      >
        <div className={classes.dialogContainer}>
          <DialogActions className={classes.actionsContainer}>
            <IconButton onClick={handleOnClose}>
              <ArrowBack color="black" />
            </IconButton>
          </DialogActions>
          <DialogContent
            className={clsx(classes.contentContainer, classes.fontJS)}
          >
            <Grid
              container
              wrap="wrap"
              alignItems="center"
              direction="column"
              spacing={4}
              style={{ margin: 0, width: "100%" }} //fixes MuiGrid properties
            >
              <Grid item>
                <Typography
                  variant="h2"
                  className={clsx(classes.title, classes.fontFTG)}
                >
                  {content.title}
                </Typography>

                <Grid container alignItems="center" justify="center">
                  <Grid item style={{ padding: 12, paddingTop: 16 }}>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      className={classes.fontJS}
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
                <Typography
                  variant="h6"
                  color="textPrimary"
                  className={classes.fontJS}
                >
                  {content.summary}
                </Typography>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  className={clsx(classes.details, classes.fontJS)}
                >
                  <ul className={classes.ul}>
                    {content.author.map((e) => (
                      <li>{e}</li>
                    ))}
                    <li className={classes.li}>{content.type}</li>
                    <li>{content.publish_year}</li>
                    {content.series !== "None" ? <li>Series</li> : null}
                    {content.call_number !== "None" ? (
                      <li>{content.call_number}</li>
                    ) : null}
                  </ul>
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>

          <DialogContent
            className={clsx(classes.contentContainer, classes.tabsContainer)}
          >
            <Tabs
              value={this.props.valueTabs}
              variant="fullWidth"
              onChange={this.handleTabsChange}
              classes={{ indicator: classes.indicator }}
            >
              <Tab
                label="Cart"
                icon={<StyledBadge badgeContent={0} showZero />}
                {...a11yProps(0)}
                className={classes.tabCart}
              />
              <Tab label="Details" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={this.props.valueTabs} index={0}>
              <Grid container spacing={1}>
                {content.isbn.map((e, index) => (
                  <Grid item key={index}>
                    <Chip
                      label={e.number}
                      variant="outlined"
                      color="primary"
                      clickable
                      deleteIcon={<AddIcon />}
                      onDelete={this.handleDelete}
                      classes={{
                        outlinedPrimary: classes.outlinedPrimary,
                        clickableColorPrimary: classes.clickableColorPrimary,
                        deleteIconOutlinedColorPrimary:
                          classes.deleteIconOutlinedColorPrimary,
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={this.props.valueTabs} index={1}>
              <Typography variant="body1" className={classes.fontFTG}>
                {content.series !== "None" ? `Series: ${content.series}` : null}
                {`Publisher: ${content.publish_name}`}
                {` (${content.publish_year})`}
                <br />
                {`Subject:`}
                {"  "}
                <ul className={classes.ul}>
                  {content.subject.map((e, index) => (
                    <li key={index}>{e}</li>
                  ))}
                </ul>
              </Typography>
            </TabPanel>
          </DialogContent>
        </div>
      </Dialog>
    ) : null;
  }
}

export default withWidth()(withStyles(styles)(ContentDialog));
