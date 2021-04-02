import React from "react";

const ContentDetailsList = ({
  author,
  type,
  publishYear,
  series,
  callNumber,
}) => (
  <React.Fragment>
    {author.map((e) => (
      <li>{e}</li>
    ))}
    <li style={{ textTransform: "capitalize" }}>{type}</li>
    <li>{publishYear}</li>
    {series !== "None" ? <li>Series</li> : null}
    {callNumber !== "None" ? <li>{callNumber}</li> : null}
  </React.Fragment>
);

export default ContentDetailsList;
