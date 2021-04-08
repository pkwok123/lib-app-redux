import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { searchReset } from "../actions";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import { Component } from "react";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { URL, queryStr } = this.props;
    if (URL === "/search") {
      this.setState({ query: queryStr });
    }
  }

  handleChangeQuery(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/search?q=${this.state.query}`);
  }

  render() {
    const { URL, searchReset } = this.props;
    const { query } = this.state;
    return (
      <React.Fragment>
        <Header URL={URL} searchReset={searchReset} />
        {URL === "/search" ? (
          <SearchBar
            query={query || ""}
            handleChangeQuery={this.handleChangeQuery}
            handleSubmit={this.handleSubmit}
          >
            <Filter />
          </SearchBar>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // React Router does not parse query strings anymore
  const URL = ownProps.location.pathname;
  const params = new URLSearchParams(ownProps.location.search);
  const queryStr = params.get("q");

  return {
    URL,
    queryStr,
  };
};

export default withRouter(
  connect(mapStateToProps, { searchReset })(HeaderContainer)
);

// const HeaderContainer = ({ location, searchReset }) => {
//   const URL = location.pathname;
//   const params = new URLSearchParams(location.search);
//   const queryStr = params.get("q");
//   return (
//     <React.Fragment>
//       <Header URL={URL} searchReset={searchReset} />
//       {URL === "/search" ? (
//         <SearchBar queryStr={queryStr || ""}>
//           <Filter />
//         </SearchBar>
//       ) : null}
//     </React.Fragment>
//   );
// };
