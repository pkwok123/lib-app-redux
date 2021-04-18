import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Divider, withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import HelpIcon from "@material-ui/icons/Help";

import data from "../Data";

const useStyles = withStyles({
  root: {
    //display: "flex",
    margin: 10,
    width: 400,
    padding: 10,
  },
  mainContent: {
    display: "flex",
  },
  image: {
    height: 140,
    width: 100,
  },
  cardContent: {
    width: "100%",
    paddingLeft: 16,
    display: "flex",
    flexDirection: "column",
  },
  selectContainer: {
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  itemTitle: {
    fontsize: "100%",
    fontFamily: "Caveat",
  },
  removebtn: {
    width: "100%",
    marginTop: 10,
  },
  isbnBtn: {
    borderRadius: "50%",
    minWidth: 0,
    width: 30,
    height: 30,
    margin: 5,
  },
});

class CartItem extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((item, index) => (
          <Card key={index} className={classes.root}>
            <CardContent className={classes.mainContent}>
              <img
                className={classes.image}
                src={item.cover_url}
                alt={item.title}
                //title={item.title}
              />
              <div className={classes.cardContent}>
                <div style={{ flexGrow: 1 }}>
                  <Typography variant="h6" className={classes.itemTitle}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ fontFamily: "Josefin Slab" }}
                  >
                    {`By ${
                      item.author.length > 1
                        ? item.author[0].concat(" ...")
                        : item.author[0]
                    }`}
                  </Typography>
                </div>

                <Button
                  className={classes.removebtn}
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteForeverIcon />}
                >
                  Remove
                </Button>
              </div>
            </CardContent>

            <Divider />

            <div className={classes.selectContainer}>
              <Typography>SELECT</Typography>
              <div style={{ paddingLeft: 10, display: "flex", flexGrow: 1 }}>
                {item.isbn.length > 1 ? (
                  item.isbn.map((isbnItem, isbnIndex) => (
                    <Button
                      key={isbnIndex}
                      className={classes.isbnBtn}
                      color="primary"
                      variant="outlined"
                      size="small"
                    >
                      {isbnIndex + 1}
                    </Button>
                  ))
                ) : (
                  <Button variant="outlined" color="primary">
                    {item.isbn[0]["number"]}
                  </Button>
                )}
              </div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  bottom: 15,
                  left: 15,
                }}
              >
                <Button style={{ minWidth: 0, borderRadius: "50%" }}>
                  <HelpIcon style={{ width: 20 }} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }
}
export default withRouter(useStyles(CartItem));
//  <CardActions>
//
//         </CardActions>
