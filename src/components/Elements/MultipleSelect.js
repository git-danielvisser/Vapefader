// https://codesandbox.io/s/cwvg4

import { TextField, MenuItem, Checkbox, ListItemText } from "@material-ui/core";

export default function MultipleSelect(props) {
  const {
    helperText,
    id,
    name,
    label,
    placeholder,
    value,
    error,
    options,
    onChange,
    variant,
  } = props;

  const handleChange = (e) => {
    const ordered = [];
    options.forEach((option) => {
      if (e.target.value.includes(option.value)) {
        ordered.push(option.value);
      }
    });

    e.target.value = ordered;
    onChange(e);
  };

  return (
    <TextField
      select
      SelectProps={{
        multiple: true,
        renderValue: (selected) => selected.join(", "),
      }}
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      value={value}
      error={error}
      helperText={helperText}
      onChange={handleChange}
      variant={variant}
      fullWidth
    >
      {options.map((option) => (
        <MenuItem alignItems="center" key={option.value} value={option.value}>
          <Checkbox checked={value.indexOf(option.value) > -1} />
          <ListItemText primary={option.label} />
        </MenuItem>
      ))}
    </TextField>
  );
}
