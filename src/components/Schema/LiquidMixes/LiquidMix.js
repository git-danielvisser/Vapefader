import LiquidMixPart from "./LiquidMixPart";
import { getPercentage } from "../../../helpers.js";
import { Box, Grid, Typography } from "@material-ui/core";

export default function LiquidMix(props) {
  const { bottleML, strength, liquids } = props;

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={12} md>
        <LiquidMixPart
          strength={liquids[0].strength}
          percent={liquids[0].percent}
          ml={getPercentage(bottleML, liquids[0].percent).toFixed(1)}
        />
      </Grid>
      <Grid item>
        <Box px={2} py={1}>
          <Typography align="center">+</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md>
        <LiquidMixPart
          strength={liquids[1].strength}
          percent={liquids[1].percent}
          ml={getPercentage(bottleML, liquids[1].percent).toFixed(1)}
        />
      </Grid>
      <Grid item>
        <Box px={2} py={1}>
          <Typography align="center">=</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md>
        <LiquidMixPart
          strength={strength.toFixed(2)}
          percent={100}
          ml={bottleML.toFixed(1)}
        />
      </Grid>
    </Grid>
  );
}
