import React from "react";
import classNames from "classnames";
import "./style.css";

const Textbox = ({ buttonText, value, onClick }) => {
  return (
    <div className="textbox-wrapper">
      <input type="text" value={value} />
      <div onClick={onClick}>{buttonText}</div>
    </div>
  );
};

export { Textbox };
