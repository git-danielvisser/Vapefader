import React, { useState } from "react";
import LiquidMixesTable from "./LiquidMixesTable";
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

export default function LiquidMixes(props) {
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
            If this nicotine strength is not available,
          </Typography>
          <Typography component="p" variant="body2">
            you can make your own liquid or mix them.
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
            <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
              <DialogTitle>Liquid mixes</DialogTitle>
              <Divider />
              <DialogContent style={{ background: "#eee" }}>
                <Box my={2}>
                  <LiquidMixesTable liquidMixes={props.liquidMixes} />
                </Box>
              </DialogContent>
            </Dialog>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
