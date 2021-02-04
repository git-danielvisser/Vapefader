import { Chip, Grid } from "@material-ui/core";
import { SmokeFree, Opacity } from "@material-ui/icons";

export default function SchemaItemChips(props) {
  const { sessions, strength } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container spacing={1} justify="center">
          {sessions !== undefined && (
            <Grid item>
              <Chip
                label={sessions + " sessions"}
                icon={<SmokeFree />}
                color={sessions !== 0 ? "secondary" : "default"}
              />
            </Grid>
          )}
          {strength !== undefined && (
            <Grid item>
              <Chip
                label={strength + " mg/ml"}
                icon={<Opacity />}
                color={strength !== 0 ? "primary" : "default"}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
