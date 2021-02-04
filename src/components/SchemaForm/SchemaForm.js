import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DateFnsUtils from "@date-io/date-fns";
import { Button, Grid, MenuItem, TextField } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import MultipleSelect from "../Elements/MultipleSelect";

function SchemaForm(props) {
  const reqMes = "This field is required!";

  const formik = useFormik({
    initialValues: {
      device: "vaporizer",
      startDate: new Date(),
      sessions: 20,
      strengths: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      decreaseFrequentie: "20",
    },
    validationSchema: Yup.object({
      device: Yup.mixed().oneOf(["vaporizer", "cigarette"]),
      startDate: Yup.date().required(reqMes),
      sessions: Yup.number().required(reqMes).min(0).max(100),
      strengths: Yup.array().of(Yup.number().min(0).max(24)).min(3),
      decreaseFrequentie: Yup.number().required(reqMes).min(0).max(100),
    }),
    onSubmit: (values) => {
      props.onSubmit(values);
    },
  });

  const isVape = formik.values.device === "vaporizer";
  const strengthOptions = Array(25)
    .fill()
    .map((val, i) => ({ label: i + " mg/ml", value: i }))
    .reverse();

  const deviceOptions = [
    { label: "Vaping", value: "vaporizer" },
    { label: "Smoking", value: "cigarette" },
  ];

  return (
    <form className="schema-form" onSubmit={formik.handleSubmit}>
      <Grid container spacing={5} justify="center">
        <Grid item xs={12}>
          <TextField
            select
            id="device"
            name="device"
            label="I want to quit"
            value={formik.values.device}
            error={formik.errors.device}
            onChange={formik.handleChange}
            variant="outlined"
            fullWidth
          >
            {deviceOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              inputVariant="outlined"
              format="dd/MM/yyyy"
              id="startDate"
              name="startDate"
              label="Start date"
              value={formik.values.startDate}
              error={formik.errors.startDate}
              onChange={(date) => formik.setFieldValue("startDate", date)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              fullWidth
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            id="sessions"
            name="sessions"
            inputProps={{ min: 0, max: 100, step: 1 }}
            label={(isVape ? "Vape" : "Smoke") + " sessions a day"}
            placeholder="20 sessions"
            value={formik.values.sessions}
            error={formik.errors.sessions}
            onChange={formik.handleChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        {isVape && (
          <Grid item xs={12}>
            <MultipleSelect
              id="strengths"
              name="strengths"
              label="Decrease nicotine mg/ml in steps"
              placeholder="12, 10, 8 , 7, 3, 0"
              value={formik.values.strengths}
              error={formik.errors.strengths}
              onChange={formik.handleChange}
              options={strengthOptions}
              variant="outlined"
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            type="number"
            id="decreaseFrequentie"
            name="decreaseFrequentie"
            inputProps={{ min: 0, max: 100, step: 1 }}
            label="Decrease every x days"
            placeholder="7"
            value={formik.values.decreaseFrequentie}
            error={formik.errors.decreaseFrequentie}
            onChange={formik.handleChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            size="large"
            variant="contained"
            color="primary"
          >
            Generate schema!
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default SchemaForm;
