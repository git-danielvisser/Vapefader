import React from "react";
import DatePicker from "react-datepicker";
import "./Elements.scss";
import "react-datepicker/dist/react-datepicker.css";

function Field(props) {
  const labelText = props.label + (props.required ? " *" : "");

  return (
    <div class="c-field">
      {props.label && (
        <label for={props.for} class="c-field__label">
          {labelText}
        </label>
      )}
      <div class="c-field__message"></div>
      <div class="c-field__input-wrapper">{props.children}</div>
    </div>
  );
}

export function TextField(props) {
  const id = props.id || props.name;

  return (
    <Field for={id} label={props.label} required={props.required}>
      <input
        id={id}
        className="c-text-input --wide"
        name={props.name}
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        required={props.required}
      />
    </Field>
  );
}

export function NumberField(props) {
  const id = props.id || props.name;

  return (
    <Field for={id} label={props.label} required={props.required}>
      <input
        id={id}
        className="c-number-input --wide"
        name={props.name}
        type="number"
        value={props.value}
        min={props.min}
        max={props.max}
        step={props.step}
        placeholder={props.placeholder}
        required={props.required}
      />
    </Field>
  );
}

export function SelectField(props) {
  const id = props.id || props.name;

  return (
    <Field for={id} label={props.label} required={props.required}>
      <select
        className="c-select-input --wide"
        id={id}
        name={props.name}
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        required={props.required}
      >
        {Object.entries(props.options).map(([option, value]) => (
          <option className="c-select-input__option" value={value}>
            {option}
          </option>
        ))}
      </select>
    </Field>
  );
}

export function CheckBoxField(props) {
  const id = props.id || props.name;

  return (
    <Field for={id} label={props.label} required={props.required}>
      <input
        id={id}
        className="c-checkbox-input"
        name={props.name}
        type="checkbox"
      ></input>
    </Field>
  );
}

export class DateField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  setDate = (date) => {
    this.setState({
      date: date,
    });
  };

  render() {
    const id = this.props.id || this.props.name;

    return (
      <Field for={id} label={this.props.label}>
        <DatePicker
          selected={this.state.date}
          onChange={this.setDate}
          className="c-text-input --wide"
        ></DatePicker>
      </Field>
    );
  }
}

export function SubmitField(props) {
  const id = props.id || props.name;

  return (
    <Field>
      <input
        id={id}
        className="c-submit-input"
        type="submit"
        value={props.value}
      />
    </Field>
  );
}
