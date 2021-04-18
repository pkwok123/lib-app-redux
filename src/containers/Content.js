import React from "react";

import { Grid } from "@material-ui/core";

import ContentDetails from "../components/ContentDetails";
import ContentDetailsList from "../components/ContentDetailsList";
import ContentIsbn from "../components/ContentIsbn";
import ContentMain from "../components/ContentMain";
import ContentMoreDetails from "../components/ContentMoreDetails";
import ContentSummary from "../components/ContentSummary";
import ContentTabs from "../components/ContentTabs";
import ContentTitle from "../components/ContentTitle";
import ContentUser from "../components/ContentUser";
import Dialog from "../components/Dialog";
import DialogActions from "../components/DialogActions";
import InlineDotList from "../components/InlineDotList";
import TabPanel from "../components/TabPanel";

const ContentContainer = ({
  content,
  open,
  handleOnClose,
  valueTabs,
  handleTabsChange,
  handleCartChipOnDelete,
}) => {
  if (!content) return null;

  return (
    <Dialog open={open} handleOnClose={handleOnClose}>
      <DialogActions handleOnClose={handleOnClose} />
      <ContentMain>
        <ContentTitle title={content.title} />
        <ContentUser rating={content.rating} />
        <ContentSummary summary={content.summary} />
        <ContentDetails>
          <InlineDotList>
            <ContentDetailsList
              author={content.author}
              type={content.type}
              publishYear={content.publish_year}
              series={content.series}
              callNumber={content.call_number}
            />
          </InlineDotList>
        </ContentDetails>
      </ContentMain>
      <ContentTabs valueTabs={valueTabs} handleTabsChange={handleTabsChange}>
        <TabPanel value={valueTabs} index={0}>
          <Grid container spacing={1}>
            {content.isbn.map((isbn, index) => (
              <Grid item key={index}>
                <ContentIsbn
                  number={isbn.number}
                  handleChipOnDelete={handleCartChipOnDelete}
                />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={valueTabs} index={1}>
          <ContentMoreDetails
            series={content.series}
            publishName={content.publish_name}
            publishYear={content.publish_year}
          >
            <InlineDotList>
              {content.subject.map((e, index) => (
                <li key={index}>{e}</li>
              ))}
            </InlineDotList>
          </ContentMoreDetails>
        </TabPanel>
      </ContentTabs>
    </Dialog>
  );
};

export default ContentContainer;
