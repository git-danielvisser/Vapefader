import React, { useState } from "react";
import LiquidMix from "./LiquidMix";

import { Box, Divider, Grid, TextField, makeStyles } from "@material-ui/core";

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

  const keyFromLiquids = (liquids) =>
    `${liquids[0].strength}-${liquids[1].strength}`;

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
          {props.liquidMixes.map(({ strength, liquids }, i) => (
            <React.Fragment key={keyFromLiquids(liquids)}>
              <Grid item xs={12}>
                <Box px={3}>
                  <LiquidMix
                    bottleML={Number(bottleML)}
                    strength={strength}
                    liquids={liquids}
                  ></LiquidMix>
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
