import React, { Component } from "react";
import theme from "../Theme";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = withStyles({
  containerForm: {
    margin: theme.spacing(2),
  },
  selectInput: {
    margin: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(3),
    },
  },
  btnSub: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),

    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(3),
    },
  },
  minWeightSelect: {
    width: 95,
  },
});

class AdvSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexes: [0],
      selected: [""],
      values: [""],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickSubtract = this.handleClickSubtract.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleClickAdd() {
    const { indexes, selected, values } = this.state;
    this.setState({
      indexes: indexes.concat(indexes.length),
      selected: selected.concat(""),
      values: values.concat(""),
    });
  }

  handleClickSubtract(event) {
    const { selected, values } = this.state;
    const index = event.currentTarget.value;

    let newSelected = [...selected];
    let newValues = [...values];
    newSelected.splice(index, 1);
    newValues.splice(index, 1);

    this.setState({
      selected: newSelected,
      values: newValues,
      indexes: Object.keys(newValues),
    });
  }

  handleChangeSelect(event) {
    // console.log(
    //   event.target.id,
    //   "id",
    //   event.target.name,
    //   "name",
    //   event.target.label,
    //   "label"
    // );
    let newSelected = [...this.state.selected];
    newSelected[event.target.name] = event.target.value;
    this.setState({ selected: newSelected });
  }

  handleChangeInput(event) {
    let newValues = [...this.state.values];
    newValues[event.target.name] = event.target.value;
    this.setState({ values: newValues });
  }

  render() {
    const { classes } = this.props;
    const { indexes, selected, values } = this.state;

    console.log(indexes, "indexes", selected, "selected", values, "values");

    return (
      <React.Fragment>
        <Collapse in={this.props.isOpen}>
          <form className={classes.containerForm} onSubmit={this.handleSubmit}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                {indexes.map((index) => (
                  <Grid
                    key={index}
                    container
                    justify="center"
                    alignItems="flex-end"
                  >
                    <Grid item className={classes.selectInput}>
                      <FormControl variant="outlined">
                        <InputLabel htmlFor={`${index}`}>Type</InputLabel>
                        <Select
                          native
                          label="Type"
                          value={selected[index]}
                          onChange={this.handleChangeSelect}
                          inputProps={{ name: index }}
                        >
                          <option aria-label="None" value="" />
                          <option value={"isbn"}>isbn</option>
                          <option value={"call_number"}>Call Number</option>
                          <option value={"title"}>Title</option>
                          <option value={"series"}>Series</option>
                          <option value={"author"}>Author</option>
                          <option value={"publish_name"}>Publisher</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <Grid container wrap="nowrap">
                        <Grid item className={classes.selectInput}>
                          <FormControl>
                            <TextField
                              variant="standard"
                              value={values[index]}
                              onChange={this.handleChangeInput}
                              inputProps={{ name: index }}
                            />
                          </FormControl>
                        </Grid>
                        <Grid item className={classes.btnSub}>
                          <Button
                            value={index}
                            onClick={this.handleClickSubtract}
                          >
                            <Fab size="small" color="secondary">
                              <RemoveIcon />
                            </Fab>
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Grid item className={classes.containerForm}>
                <Button onClick={this.handleClickAdd}>
                  <Fab size="medium" color="secondary">
                    <AddIcon />
                  </Fab>
                </Button>
              </Grid>
              <Grid item>
                <Grid container justify="center">
                  <Grid item className={classes.selectInput}>
                    <FormControl variant="outlined">
                      <InputLabel>Subject</InputLabel>
                      <Select
                        native
                        label="Subject"
                        //value={selected[index]}
                        onChange={this.handleChangeSelect}
                        //inputProps={{ name: index, id: index }}
                      >
                        <option aria-label="None" value="" />
                        <option value={"theology"}>Theology</option>
                        <option value={"family"}>Family</option>
                        <option value={"church fathers"}>Church Fathers</option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item className={classes.selectInput}>
                    <FormControl variant="outlined">
                      <InputLabel>Format</InputLabel>
                      <Select
                        native
                        label="Format"
                        //value={selected[index]}
                        onChange={this.handleChangeSelect}
                        //inputProps={{ name: index, id: index }}
                        className={classes.minWeightSelect}
                      >
                        <option aria-label="None" value="" />
                        <option value={"all"}>All</option>
                        <option value={"book"}>Books</option>
                        <option value={"dvd"}>DVDs</option>
                        <option value={"cd"}>CDs</option>
                        <option value={"misc"}>Misc</option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item className={classes.selectInput}>
                    <FormControl variant="outlined">
                      <InputLabel>Rating</InputLabel>
                      <Select
                        native
                        label="Rating"
                        //value={selected[index]}
                        onChange={this.handleChangeSelect}
                        //inputProps={{ name: index, id: index }}
                        className={classes.minWeightSelect}
                      >
                        <option aria-label="None" value="" />
                        <optgroup label="Amazon">
                          <option value={"amazon-5"}>5</option>
                          <option value={"amazon-4"}>4</option>
                          <option value={"amazon-3"}>3</option>
                          <option value={"amazon-2"}>2</option>
                          <option value={"amazon-1"}>1</option>
                          <option value={"amazon-0"}>0</option>
                        </optgroup>
                        <optgroup label="MCC">
                          <option value={"mcc-5"}>5</option>
                          <option value={"mcc-4"}>4</option>
                          <option value={"mcc-3"}>3</option>
                          <option value={"mcc-2"}>2</option>
                          <option value={"mcc-1"}>1</option>
                          <option value={"mcc-0"}>0</option>
                        </optgroup>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.containerForm}>
                <Button type="submit" color="secondary" variant="contained">
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default useStyles(AdvSearch);
