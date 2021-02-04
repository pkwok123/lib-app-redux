import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getVisibleSearch,
  getSearchStatus,
  getNoResults,
} from "../reducers/search";
import { fetchSearch } from "../actions";
import { loadSearch } from "../actions";
import SearchItem from "../components/SearchItem";
import SearchList from "../components/SearchList";
import { Button, LinearProgress } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const loadData = (props) => {
  const { query } = props;
  props.fetchSearch(query);
};

class SearchContainer extends Component {
  componentDidMount() {
    loadData(this.props);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      loadData(this.props);
    }
  }

  render() {
    const { isLoading, results, noResults } = this.props;
    console.log(this.props.query);
    if (isLoading) {
      return <LinearProgress />;
    }

    if (noResults) {
      return <Button>No Results Found</Button>;
    }

    return results.length > 0 ? (
      <SearchList>
        {results.map((result, index) => (
          <SearchItem key={result._id} result={result} index={index} />
        ))}
      </SearchList>
    ) : (
      ""
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const params = new URLSearchParams(ownProps.history.location.search);
  const query = params.get("q");
  return {
    query,
    isLoading: getSearchStatus(state.search),
    results: getVisibleSearch(state.search),
    noResults: getNoResults(state.search),
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchSearch })(SearchContainer)
);
