import React, { Component } from "react";
import { connect } from "react-redux";
import Filter from "../filter";
import Content from "../content";
import { filterChanged } from "../../state/actions";
import "./style.css";

class Panel extends Component {
  fetchTheData = e => {
    this.props.filterChanged(parseInt(e.target.value));
    e.persist();
  };

  render() {
    return (
      <div className="panel-wrapper">
        <Filter fetchTheData={this.fetchTheData} />
        <Content />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterChanged: guideLength => dispatch(filterChanged(guideLength))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Panel);
