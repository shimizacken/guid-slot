import React from "react";
import { connect } from "react-redux";
import "./style.css";

const Content = ({ guid }) => (
  <div className="content-wrapper">
    <input type="text" value={guid} />
  </div>
);

const mapStateToProps = state => ({
  guid: state.guid
});

export default connect(mapStateToProps)(Content);
