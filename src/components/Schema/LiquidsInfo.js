// https://material-ui.com/components/dividers/

import {
  Box,
  Paper,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Chip,
  Divider,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { SmokeFree, Opacity } from "@material-ui/icons";

function LiquidMix(props) {
  const liquids = props.liquidMix?.liquids;
  if (!liquids) return <div>weird</div>;

  return (
    <Grid container spacing={0} justify="center">
      <Grid item xs>
        <Chip
          label={liquids[0].amount + " mg/ml | " + liquids[0].percentage + "%"}
          icon={<Opacity />}
          size="small"
          color="default"
          variant="outline"
        />
        
        <Chip
          label={liquids[1].amount + " mg/ml | " + liquids[1].percentage + "%"}
          icon={<Opacity />}
          size="small"
          color="default"
          variant="outline"
        />
      </Grid>
    </Grid>
  );
}

export default function Liquids(props) {
  console.log(props.liquidMixes);

  return (
    <Box>
      <Paper style={{ padding: 20 }} variant="outlined" square>
        <LiquidMix liquidMix={props.liquidMixes[0]}></LiquidMix>
        <Typography component="h5">See other mixing combinations..</Typography>
      </Paper>
    </Box>
  );
}
