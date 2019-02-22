import React from "react";
import { connect } from "react-redux";
import { Loader } from "../loader";
import "./style.css";

const Content = ({ guid, inProgress }) => (
  <div className="content-wrapper">
    {inProgress ? <Loader /> : <input type="text" value={guid} />}
  </div>
);

const mapStateToProps = state => ({
  guid: state.guid,
  inProgress: state.inProgress
});

export default connect(mapStateToProps)(Content);
