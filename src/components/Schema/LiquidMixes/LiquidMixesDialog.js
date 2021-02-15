import React, { useState } from "react";
import LiquidMixes from "./LiquidMixes";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { Opacity } from "@material-ui/icons";

export default function LiquidMixesDialog(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="p" variant="body2">
            Mix your own liquids to 3mg/ml.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography component="h5">
              <Button
                onClick={handleClickOpen}
                variant="outlined"
                color="primary"
                endIcon={<Opacity />}
              >
                Liquid mixes
              </Button>
            </Typography>
            <Dialog maxWidth="md" open={open} onClose={handleClose}>
              <DialogTitle>Liquid mixes</DialogTitle>
              <Divider />
              <DialogContent style={{ padding: "0px", overflow: "hidden" }}>
                <LiquidMixes liquidMixes={props.liquidMixes} />
              </DialogContent>
            </Dialog>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
