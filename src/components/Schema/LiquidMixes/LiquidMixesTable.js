import React, { useState } from "react";
import LiquidInfo from "./LiquidInfo";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";

export default function LiquidsMixesTable(props) {
  const [bottleML, setbottleML] = useState(10);

  const hanleOnChange = (e) => {
    const value = e.target.value;
    setbottleML(value);
  };

  return (
    <Box>
      <Box mb={3}>
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Liquid 1</TableCell>
              <TableCell>Liquid 2</TableCell>
              <TableCell>Combined</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.liquidMixes.map(({ strength, liquids }) => (
              <TableRow>
                <TableCell>
                  <LiquidInfo
                    strength={liquids[0].strength}
                    percentage={liquids[0].percentage}
                    ml={((bottleML / 100) * liquids[0].percentage).toFixed(1)}
                  />
                </TableCell>
                <TableCell>
                  <LiquidInfo
                    strength={liquids[1].strength}
                    percentage={liquids[1].percentage}
                    ml={((bottleML / 100) * liquids[1].percentage).toFixed(1)}
                  />
                </TableCell>
                <TableCell>
                  <LiquidInfo
                    strength={strength.toFixed(2)}
                    percentage={100}
                    ml={bottleML}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
