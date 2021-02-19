import { Box, Chip, Grid, Paper, Typography } from "@material-ui/core";
import { Opacity, RadioButtonChecked, Timelapse } from "@material-ui/icons";

export default function LiquidMixPart(props) {
  const { strength, percent, ml } = props;
  return (
    <Paper>
      <Box p={1}>
        <Grid container spacing={1} alignItems="baseline">
          <Grid item>
            <Chip
              label={`${strength} mg/ml`}
              icon={<Opacity />}
              size="small"
              color="primary"
            />
          </Grid>
          <Grid item xs>
            <Chip
              label={`${percent}%`}
              icon={percent === 100 ? <RadioButtonChecked /> : <Timelapse />}
              size="small"
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
