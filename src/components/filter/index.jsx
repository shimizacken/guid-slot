import React from "react";
import { RadioButton } from "../common/radioButton";
import "./style.css";

const Filter = ({ lengths, onChange, disabled }) => {
  return (
    <div className="filter-wrapper">
      {lengths.map(len => (
        <RadioButton
          key={len}
          text={len}
          value={len}
          onChange={onChange}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export { Filter };
