import { Box, Chip, Grid, Paper, Typography } from "@material-ui/core";
import { Opacity, RadioButtonChecked, Timelapse } from "@material-ui/icons";

export default function LiquidInfo(props) {
  const { strength, percentage, ml } = props;
  return (
    <Paper>
      <Box p={1}>
        <Grid container spacing={1} alignItems="center" justify="center">
          <Grid item>
            <Chip
              label={`${strength} mg/ml`}
              icon={<Opacity />}
              size="small"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Chip
              label={`${percentage}%`}
              icon={percentage === 100 ? <RadioButtonChecked /> : <Timelapse />}
              size="small"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              {`${ml}ml`}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
