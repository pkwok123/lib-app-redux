import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { searchReset } from "../actions";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const HeaderContainer = ({ location, searchReset }) => {
  const URL = location.pathname;
  const params = new URLSearchParams(location.search);
  const queryStr = params.get("q");
  return (
    <React.Fragment>
      <Header URL={URL} searchReset={searchReset} />
      {URL === "/search" ? <SearchBar queryStr={queryStr || ""} /> : null}
    </React.Fragment>
  );
};

export default withRouter(connect(null, { searchReset })(HeaderContainer));
