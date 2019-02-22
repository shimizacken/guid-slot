import React from "react";
import { connect } from "react-redux";
import { Logo } from "../common/logo";
import classNames from "classnames";
import "./style.css";

const HeaderContainer = ({ inProgress }) => (
  <header className={classNames(inProgress && "shake-animation")}>
    <Logo />
    <h1>
      <i>guid_slot</i>
    </h1>
  </header>
);

const mapStateToProps = state => ({
  inProgress: state.inProgress
});

const Header = connect(mapStateToProps)(HeaderContainer);

export { Header };
