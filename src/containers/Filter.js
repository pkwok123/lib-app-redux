import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Drawer, Grid } from "@material-ui/core";

import SelectSort from "../components/SelectSort";
import SelectFormat from "../components/SelectFormat";
import AdvSearchBtn from "../components/AdvSearchBtn";
import { setFormatFilter, setSortFilter } from "../actions";
import { getFormatFilter, getSortFilter } from "../reducers/filter";
import GridContainer from "../components/GridContainer";

class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { openAdvSearch: false };

    this.handleAdvSearchBtn = this.handleAdvSearchBtn.bind(this);
    this.handleSelectSort = this.handleSelectSort.bind(this);
    this.handleSelectFormat = this.handleSelectFormat.bind(this);
  }

  handleAdvSearchBtn() {
    this.setState({ openAdvSearch: !this.state.openAdvSearch });
  }

  handleSelectSort(event) {
    this.props.setSortFilter(event.target.value);
  }

  handleSelectFormat(event) {
    this.props.setFormatFilter(event.target.value);
  }

  render() {
    const { isOpen, handleClose, sortFilter, formatFilter } = this.props;

    return (
      <Drawer anchor="bottom" open={isOpen} onClose={handleClose}>
        <GridContainer spacing={2}>
          <Grid item style={{ margin: "20px 0px 0px" }}>
            <SelectSort
              value={sortFilter}
              handleChange={this.handleSelectSort}
            />
          </Grid>
          <Grid item style={{ margin: "20px 0px 0px" }}>
            <SelectFormat
              value={formatFilter}
              handleChange={this.handleSelectFormat}
            />
          </Grid>
        </GridContainer>
        <AdvSearchBtn handleClick={this.handleAdvSearchBtn} />
        {/*<AdvSearch open={this.state.openAdvSearch} /> */}
      </Drawer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // React Router does not parse query strings anymore
  const URL = ownProps.location.pathname;
  const params = new URLSearchParams(ownProps.location.search);
  const queryStr = params.get("q");

  //is it necessary to compare state and ownprops to represent active filter like redux examples?
  return {
    URL,
    queryStr,
    sortFilter: getSortFilter(state.filter),
    formatFilter: getFormatFilter(state.filter),
  };
};

export default withRouter(
  connect(mapStateToProps, { setSortFilter, setFormatFilter })(FilterContainer)
);
