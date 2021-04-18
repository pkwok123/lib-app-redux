import React from "react";
import { FormControl, InputLabel, Select } from "@material-ui/core";

const FilterFormat = ({ value, handleChange }) => (
  <FormControl variant="outlined">
    <InputLabel htmlFor="outlined-format-native-simple">Format</InputLabel>
    <Select
      native
      value={value}
      onChange={handleChange}
      label="Format"
      autoWidth={true}
      inputProps={{
        name: "sortFormatValue",
        id: "outlined-format-native-simple",
      }}
    >
      <option aria-label="None" value="" />
      <option value={"all"}>All</option>
      <option value={"book"}>Books</option>
      <option value={"dvd"}>DVDs</option>
      <option value={"cd"}>CDs</option>
      <option value={"misc"}>Misc</option>
    </Select>
  </FormControl>
);

export default FilterFormat;
