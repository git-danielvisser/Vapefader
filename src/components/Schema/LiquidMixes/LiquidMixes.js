import React, { useState } from "react";
import LiquidMixPart from "./LiquidMixPart";
import {
  Box,
  Divider,
  Grid,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  gridBox: {
    background: "#eee",
  },
});

export default function LiquidsMixesTable(props) {
  const classes = useStyles();
  const [bottleML, setbottleML] = useState(10);

  const hanleOnChange = (e) => {
    const value = e.target.value;
    if (value.length < 5) {
      setbottleML(value);
    }
  };

  const getMLPart = (ml, percentage) => ((ml / 100) * percentage).toFixed(1);

  return (
    <Box>
      <Box p={3}>
        <TextField
          label="ML per bottle"
          type="number"
          inputProps={{ min: 0, max: 100, step: 1 }}
          value={bottleML}
          onChange={hanleOnChange}
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box py={3} className={classes.gridBox}>
        <Grid container spacing={3}>
          {props.liquidMixes.map(({ strength, liquids }) => (
            <React.Fragment>
              <Grid item xs={12}>
                <Box px={3}>
                  <Grid container alignItems="center" justify="center">
                    <Grid item xs={12} md>
                      <LiquidMixPart
                        strength={liquids[0].strength}
                        percentage={liquids[0].percentage}
                        ml={getMLPart(bottleML, liquids[0].percentage)}
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
                        percentage={liquids[1].percentage}
                        ml={getMLPart(bottleML, liquids[1].percentage)}
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
                        percentage={100}
                        ml={bottleML}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md>
                <Divider />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
