import React from "react";

const ContentDetailsList = ({ content }) => (
  <React.Fragment>
    {content.author.map((e) => (
      <li>{e}</li>
    ))}
    <li style={{ textTransform: "capitalize" }}>{content.type}</li>
    <li>{content.publish_year}</li>
    {content.series !== "None" ? <li>Series</li> : null}
    {content.call_number !== "None" ? <li>{content.call_number}</li> : null}
  </React.Fragment>
);

export default ContentDetailsList;
