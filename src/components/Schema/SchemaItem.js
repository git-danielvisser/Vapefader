import LiquidsInfo from "./LiquidsInfo.js";

import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@material-ui/core";
import { SmokeFree, Opacity } from "@material-ui/icons";

function SchemaItemInfo(props) {
  const { nicotineMg, sessions } = props;

  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12}>
        <Typography component="p">
          This is your first day, good luck! We need to hava a custom message
          for most boxes :)
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1} justify="center">
          <Grid item>
            <Chip
              label={sessions + " sessions"}
              icon={<SmokeFree />}
              variant="outline"
              color={sessions !== 0 ? "secondary" : "default"}
            />
          </Grid>
          <Grid item>
            <Chip
              label={nicotineMg + " mg/ml"}
              icon={<Opacity />}
              variant="outline"
              color={nicotineMg !== 0 ? "primary" : "default"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function SchemaItem(props) {
  const { date, nicotineMg, sessions, liquidMixes } = props;
  return (
    <Card>
      <CardHeader title={date}></CardHeader>
      <Divider />
      <CardContent>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} md={9}>
            <SchemaItemInfo nicotineMg={nicotineMg} sessions={sessions} />
          </Grid>
          {liquidMixes && (
            <Grid item xs={12} md={12}>
              <LiquidsInfo liquidMixes={liquidMixes} />
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}
