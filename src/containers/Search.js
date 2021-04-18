import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Button, LinearProgress } from "@material-ui/core";

import { fetchSearch } from "../actions";
import { getSearchStatus, getNoResults, getResult } from "../reducers/search";
import { getVisibleSearch } from "../reducers";
import SearchItem from "../components/SearchItem";
import SearchList from "../components/SearchList";
import Content from "../containers/Content";

const loadData = (props) => {
  const { queryStr } = props;
  props.fetchSearch(queryStr);
};

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentTabs: 0,
    };
    this.handleImgClick = this.handleImgClick.bind(this);
    this.handleContentTabsChange = this.handleContentTabsChange.bind(this);
    this.handleContentDialogClose = this.handleContentDialogClose.bind(this);
    this.handleContentCartChipOnDelete = this.handleContentCartChipOnDelete.bind(
      this
    );
  }

  componentDidMount() {
    loadData(this.props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.queryStr !== this.props.queryStr) {
      loadData(this.props);
    }
  }

  handleImgClick(event) {
    const { queryStr } = this.props;
    const { id } = event.target;

    this.props.history.push(`/search?q=${queryStr}&_id=${id}`);
  }
  handleContentTabsChange(event, newValue) {
    this.setState({ contentTabs: newValue });
  }

  handleContentCartChipOnDelete() {
    console.info("You clicked the add to cart icon.");
  }

  handleContentDialogClose() {
    this.props.history.goBack();
    this.setState({ contentTabs: 0 });
  }

  render() {
    const { isLoading, results, noResults, idStr, result } = this.props;

    if (isLoading) {
      return <LinearProgress />;
    }

    if (noResults) {
      return <Button>No Results Found</Button>;
    }

    return results.length > 0 ? (
      <SearchList>
        {results.map((result, index) => (
          <SearchItem
            key={result._id}
            result={result}
            index={index}
            handleImgClick={this.handleImgClick}
          />
        ))}
        <Content
          open={idStr ? true : false}
          handleOnClose={this.handleContentDialogClose}
          valueTabs={this.state.contentTabs}
          handleTabsChange={this.handleContentTabsChange}
          handleCartChipOnDelete={this.handleContentCartChipOnDelete}
          content={result || ""}
        />
      </SearchList>
    ) : (
      ""
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // React Router does not parse query strings anymore
  const params = new URLSearchParams(ownProps.location.search);
  const queryStr = params.get("q");
  const idStr = params.get("_id");

  return {
    queryStr,
    idStr,
    result: getResult(state.search, idStr),
    isLoading: getSearchStatus(state.search),
    results: getVisibleSearch(state),
    noResults: getNoResults(state.search),
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchSearch })(SearchContainer)
);
