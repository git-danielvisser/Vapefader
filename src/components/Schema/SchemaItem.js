import React from "react";
import SchemaItemChips from "./SchemaItemChips";
import LiquidMixes from "./LiquidMixes/LiquidMixes";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";

export default function SchemaItem(props) {
  const { date, strength, sessions, message, liquidMixes } = props;
  return (
    <Card align="center">
      <CardHeader title={date}></CardHeader>
      <Divider />
      <CardContent>
        <Box mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SchemaItemChips strength={strength} sessions={sessions} />
            </Grid>
            {message !== undefined && (
              <Grid item xs={12}>
                <Typography component="p">{message}</Typography>
              </Grid>
            )}
            {liquidMixes && (
              <React.Fragment>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <LiquidMixes liquidMixes={liquidMixes} />
                </Grid>
              </React.Fragment>
            )}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
