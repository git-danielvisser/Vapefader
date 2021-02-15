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

const STRENGTH_OPTIONS = Array(25)
  .fill()
  .map((val, i) => ({ label: i + " mg/ml", value: i }))
  .reverse();

const DEVICE_OPTIONS = [
  { label: "Vaping", value: "vaporizer" },
  { label: "Smoking", value: "cigarette" },
];

function SchemaForm(props) {
  const reqMes = "This field is required!";
  const formik = useFormik({
    initialValues: {
      device: "vaporizer",
      startDate: new Date(),
      sessions: 20,
      strengths: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      decreaseFrequentie: 7,
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

  const { values, errors, handleChange } = formik;
  const isVape = values.device === "vaporizer";

  return (
    <form className="schema-form" onSubmit={formik.handleSubmit}>
      <Grid container spacing={5} justify="center">
        <Grid item xs={12}>
          <TextField
            select
            id="device"
            name="device"
            value={values.device}
            error={errors.device}
            onChange={handleChange}
            label="I want to quit"
            variant="outlined"
            fullWidth
          >
            {DEVICE_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              id="startDate"
              name="startDate"
              label="Start date"
              value={values.startDate}
              error={errors.startDate}
              onChange={(date) => formik.setFieldValue("startDate", date)}
              format="dd/MM/yyyy"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              variant="inline"
              inputVariant="outlined"
              disableToolbar
              fullWidth
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            id="sessions"
            name="sessions"
            value={values.sessions}
            error={errors.sessions}
            onChange={handleChange}
            inputProps={{ min: 0, max: 100, step: 1 }}
            placeholder="20 sessions"
            label={(isVape ? "Vape" : "Smoke") + " sessions a day"}
            variant="outlined"
            fullWidth
          />
        </Grid>
        {isVape && (
          <Grid item xs={12}>
            <MultipleSelect
              id="strengths"
              name="strengths"
              value={values.strengths}
              error={errors.strengths}
              onChange={handleChange}
              options={STRENGTH_OPTIONS}
              label="Decrease nicotine mg/ml in steps"
              placeholder="12, 10, 8 , 7, 3, 0"
              variant="outlined"
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            type="number"
            id="decreaseFrequentie"
            name="decreaseFrequentie"
            value={values.decreaseFrequentie}
            error={errors.decreaseFrequentie}
            onChange={handleChange}
            inputProps={{ min: 0, max: 100, step: 1 }}
            placeholder="7"
            label="Decrease every x days"
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
            disabled={props.isLoading}
          >
            Generate schema!
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default SchemaForm;
