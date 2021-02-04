import { Chip, Grid, Typography } from "@material-ui/core";
import { Opacity, RadioButtonChecked, Timelapse } from "@material-ui/icons";

export default function LiquidInfo(props) {
  const { strength, percentage, ml } = props;

  const strengthLabel = `${strength} mg/ml`;
  let mlLabel = `${ml}ml`;
  let percentLabel = `${percentage}%`;

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={12}>
        <Chip
          label={strengthLabel}
          icon={<Opacity />}
          size="small"
          color="default"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Chip
          label={percentLabel}
          icon={percentage === 100 ? <RadioButtonChecked /> : <Timelapse />}
          size="small"
          color="secondary"
        />
      </Grid>
      <Grid item xs>
        <Typography variant="body2">{mlLabel}</Typography>
      </Grid>
    </Grid>
  );
}
