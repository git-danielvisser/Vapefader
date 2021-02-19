import React from "react";
import LiquidMixesDialog from "./LiquidMixes/LiquidMixesDialog";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { SmokeFree, Opacity } from "@material-ui/icons";

const useStyles = makeStyles({
  schemaItem: {
    height: "100%",
  },
});

export default function SchemaItem(props) {
  const { date, strength, sessions, message, liquidMixes } = props;
  const classes = useStyles();

  const dayMonth = date.toLocaleString("default", {
    day: "numeric",
    month: "long",
  });
  const weekday = date.toLocaleString("default", { weekday: "long" });

  return (
    <Card align="center" className={classes.schemaItem}>
      <CardHeader title={dayMonth} subheader={weekday}></CardHeader>
      <Divider />
      <CardContent>
        <Box p={1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={1} justify="center">
                {sessions !== undefined && (
                  <Grid item>
                    <Chip
                      label={`${sessions} sessions`}
                      icon={<SmokeFree />}
                      color={sessions !== 0 ? "secondary" : "default"}
                    />
                  </Grid>
                )}
                {strength !== undefined && (
                  <Grid item>
                    <Chip
                      label={`${strength} mg/ml`}
                      icon={<Opacity />}
                      color={strength !== 0 ? "primary" : "default"}
                    />
                  </Grid>
                )}
              </Grid>
            </Grid>
            {message !== undefined && (
              <Grid item xs={12}>
                <Typography component="p">{message}</Typography>
              </Grid>
            )}
          </Grid>
        </Box>
      </CardContent>
      {liquidMixes && (
        <React.Fragment>
          <Divider />
          <Box p={3}>
            <LiquidMixesDialog strength={strength} liquidMixes={liquidMixes} />
          </Box>
        </React.Fragment>
      )}
    </Card>
  );
}
