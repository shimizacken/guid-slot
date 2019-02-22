import React from "react";
import classNames from "classnames";
import "./style.css";

const RadioButton = ({ text, value, onChange, disabled }) => {
  return (
    <React.Fragment>
      <input
        id={value}
        type="radio"
        className="radio-button"
        name="guide-length"
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      <label
        htmlFor={value}
        className={classNames("radio-button-wrapper", disabled && "disabled")}
      >
        <span>{text}</span>
      </label>
    </React.Fragment>
  );
};

export { RadioButton };
