import React, { useState } from "react";
import LiquidsMixesTable from "./LiquidsMixesTable.js";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Opacity } from "@material-ui/icons";

const useStyles = makeStyles({
  dialogContent: {
    padding: "0px",
    overflowX: "hidden",
    overflowY: "auto",
  },
});

export default function LiquidMixesDialog(props) {
  const { strength, liquidMixes } = props;
  const [open, setOpen] = useState(false);
  const classes = useStyles();

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
            Mix your own liquids to {strength}mg/ml.
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
              <DialogContent className={classes.dialogContent}>
                <LiquidsMixesTable liquidMixes={liquidMixes} />
              </DialogContent>
            </Dialog>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
