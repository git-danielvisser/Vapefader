import { Box, Chip, Grid, Paper, Typography } from "@material-ui/core";
import {
  Colorize,
  Opacity,
  RadioButtonChecked,
  Timelapse,
} from "@material-ui/icons";

export default function LiquidInfo(props) {
  const { strength, percentage, ml } = props;
  return (
    <Paper>
      <Box p={1}>
        <Grid container spacing={1} alignItems="baseline">
          <Grid item>
            <Chip
              label={`${strength} mg/ml`}
              icon={<Opacity />}
              size="small"
              color="secondary"
            />
          </Grid>
          <Grid item xs>
            <Chip
              label={`${percentage}%`}
              icon={percentage === 100 ? <RadioButtonChecked /> : <Timelapse />}
              size="small"
              color="primary"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Typography variant="body2">{`${ml}ml`}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
