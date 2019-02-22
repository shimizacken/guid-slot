import React from "react";
import { Logo } from "../common/logo";
import "./style.css";

const Loader = () => (
  <div className="shake-animation">
    <Logo />
  </div>
);

export { Loader };
