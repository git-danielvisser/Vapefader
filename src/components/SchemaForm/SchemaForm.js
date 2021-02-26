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

const HELP_MESSAGES = {
  strengths:
    "The schema reduces the nicotine content of your liquid in these steps.",
  strengthDecreaseInterval:
    "The schema reduces nicotine content  of your liquid every x days.",
  sessionsDecreaseInterval: "The schema reduces smoking sessions every x days.",
};

const ERROR_MESSAGES = {
  required: "This field is required",
  mustBeNumber: "Please enter a number.",
  minimumNumber: (field, number) =>
    `${field} must be be more than or equal to ${number}.`,
  maximumNumber: (field, number) =>
    `${field} must be be less than or equal to ${number}.`,
  invalidDate: "Please enter a valid date.",
  minimumSteps: "Please select atleast 2 nicotine mg/ml steps.",
};

const DEVICE_OPTIONS = [
  { label: "Vaping", value: "vaporizer" },
  { label: "Smoking", value: "cigarette" },
];

const STRENGTH_OPTIONS = Array(25)
  .fill()
  .map((val, i) => ({ label: i + " mg/ml", value: i }))
  .reverse();

export default function SchemaForm(props) {
  const formik = useFormik({
    initialValues: {
      device: DEVICE_OPTIONS[0].value,
      startDate: new Date(),
      sessions: 20,
      strengths: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      decreaseInterval: 7,
    },
    validationSchema: Yup.object({
      device: Yup.mixed().oneOf([
        DEVICE_OPTIONS[0].value,
        DEVICE_OPTIONS[1].value,
      ]),
      startDate: Yup.date()
        .typeError(ERROR_MESSAGES.invalidDate)
        .required(ERROR_MESSAGES.required),
      sessions: Yup.number()
        .typeError(ERROR_MESSAGES.mustBeNumber)
        .required(ERROR_MESSAGES.required)
        .min(2, ERROR_MESSAGES.minimumNumber("Daily sessions", 2))
        .max(100, ERROR_MESSAGES.maximumNumber("Daily sessions", 100)),
      strengths: Yup.array()
        .of(Yup.number().min(0).max(24))
        .min(2, ERROR_MESSAGES.minimumSteps),
      decreaseInterval: Yup.number()
        .required(ERROR_MESSAGES.required)
        .min(1, ERROR_MESSAGES.minimumNumber("Reduce every x days", 1))
        .max(100, ERROR_MESSAGES.maximumNumber("Reduce every x days", 100)),
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
              value={values.startDate}
              error={errors.startDate}
              onChange={(date) => formik.setFieldValue("startDate", date)}
              label="Start date"
              helperText={errors.startDate}
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
            label={(isVape ? "Vape" : "Smoke") + " sessions a day"}
            helperText={errors.sessions}
            placeholder="20 sessions"
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
              label="Nicotine mg/ml steps"
              helperText={errors.strengths || HELP_MESSAGES.strengths}
              placeholder="12, 10, 8 , 7, 3, 0"
              variant="outlined"
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            type="number"
            id="decreaseInterval"
            name="decreaseInterval"
            value={values.decreaseInterval}
            error={errors.decreaseInterval}
            onChange={handleChange}
            inputProps={{ min: 0, max: 100, step: 1 }}
            label="Reduce every x days"
            helperText={
              errors.decreaseInterval || isVape
                ? HELP_MESSAGES.strengthDecreaseInterval
                : HELP_MESSAGES.sessionsDecreaseInterval
            }
            placeholder="7"
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
