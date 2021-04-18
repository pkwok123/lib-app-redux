import React from "react";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import {
  AUTHOR,
  RATING,
  RELEVANCE,
  SUBJECT,
  TITLE,
} from "../constants/searchFilters";

const FilterSort = ({ value, handleChange }) => (
  <FormControl variant="outlined">
    <InputLabel htmlFor="outlined-sort-native-simple">Sort</InputLabel>
    <Select
      native
      value={value}
      onChange={handleChange}
      label="Sort"
      autoWidth={true}
      inputProps={{
        name: "sortA_ZValue",
        id: "outlined-sort-native-simple",
      }}
    >
      <option aria-label="None" value="" />
      <option value={RELEVANCE}>Relevance</option>
      <option value={RATING}>Rating - Amazon</option>
      <option value={TITLE}>Title</option>
      <option value={AUTHOR}>Author</option>
      <option value={SUBJECT}>Subject</option>
    </Select>
  </FormControl>
);

export default FilterSort;
