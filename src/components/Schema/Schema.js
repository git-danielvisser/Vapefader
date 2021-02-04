import React from "react";
import SchemaItem from "./SchemaItem.js";
import DividerText from "../Elements/DividerText.js";

import { Grid, Typography, Box } from "@material-ui/core";

export default function Schema(props) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box mb={5}>
          <Typography align="center" variant="h4" component="h2">
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
    if (
      !previousDate ||
      item.date.getMonth() > previousDate.getMonth() ||
      item.date.getFullYear() > previousDate.getFullYear()
    ) {
      gridItems.push(
        <Grid item xs={12}>
          <Box mt={1} mb={1}>
            <DividerText>
              <Typography variant="body2" component="h5">
                {formatDividerDate(item.date)}
              </Typography>
            </DividerText>
          </Box>
        </Grid>
      );
    }
    previousDate = item.date;

    gridItems.push(
      <Grid item xs={12} md>
        <SchemaItem
          date={formatItemDate(item.date)}
          strength={item.strength}
          sessions={item.sessions}
          message={item.message}
          liquidMixes={item.liquidMixes ? item.liquidMixes : false}
        />
      </Grid>
    );
  });

  return (
    <Grid container spacing={2} alignItems="stretch" alignContent="stretch">
      {gridItems}
    </Grid>
  );
}

function formatDividerDate(date) {
  return date.toLocaleString("default", { month: "long", year: "numeric" });
}

function formatItemDate(date) {
  return date.toLocaleString("default", {
    day: "numeric",
    month: "long",
  });
}
