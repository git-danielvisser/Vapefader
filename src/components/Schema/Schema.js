import React from "react";
import SchemaItem from "./SchemaItem.js";
import DividerText from "../Elements/DividerText.js";

import { Grid, Typography, Box } from "@material-ui/core";

export default function Schema(props) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box mb={5}>
          <Typography align="center" variant="h5" component="h2">
            Your quitting schema!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {renderSchemaItems(props.schemaItems)}
      </Grid>
    </Grid>
  );
}

function renderSchemaItems(items) {
  if (!Array.isArray(items) || items.length < 1) return;

  const gridItems = [];
  let previousDate = null;
  items.forEach((item, i) => {
    const { date, strength, sessions, message, liquidMixes } = item;

    if (
      !previousDate ||
      date.getMonth() > previousDate.getMonth() ||
      date.getFullYear() > previousDate.getFullYear()
    ) {
      const monthYear = date.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });

      gridItems.push(
        <Grid item xs={12} key={`divider-${date.getTime()}`}>
          <Box mt={2} mb={2}>
            <DividerText>
              <Typography variant="body2" component="h5">
                {monthYear}
              </Typography>
            </DividerText>
          </Box>
        </Grid>
      );
    }
    previousDate = date;

    gridItems.push(
      <Grid item xs={12} md={4} key={`item-${date.getTime()}`}>
        <SchemaItem
          date={date}
          strength={strength}
          sessions={sessions}
          message={message}
          liquidMixes={liquidMixes ? liquidMixes : false}
        />
      </Grid>
    );
  });

  return (
    <Grid container spacing={2} alignItems="stretch">
      {gridItems}
    </Grid>
  );
}
