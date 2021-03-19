import { withWidth } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ContentDetails from "../components/ContentDetails";
import ContentDetailsList from "../components/ContentDetailsList";
import ContentMain from "../components/ContentMain";
import ContentSummary from "../components/ContentSummary";
import ContentTitle from "../components/ContentTitle";
import ContentUser from "../components/ContentUser";
import MyDialog from "../components/MyDialog";
import DialogActions from "../components/DialogActions";
import InlineDotList from "../components/InlineDotList";
import ContentDialog from "../components/ContentDialog";

const ContentContainer = ({ content, open, handleOnClose }) => {
  if (!content) return null;

  return (
    <ContentDialog open={open} onClose={handleOnClose}>
      {/* <DialogActions handleOnClose={handleOnClose} />
      <ContentMain>
        <ContentTitle content={content} />
        <ContentUser content={content} />
        <ContentSummary content={content} />
        <ContentDetails>
          <InlineDotList>
            <ContentDetailsList content={content} />
          </InlineDotList>
        </ContentDetails>
      </ContentMain> */}
      hi
    </ContentDialog>
  );
};

export default ContentContainer;
