import React, { Component } from "react";
import { connect } from "react-redux";
import { Filter } from "../filter";
import Content from "../content";
import { guidLengthChanged } from "../../state/actions";
import "./style.css";

class Panel extends Component {
  generateGuid = e => {
    this.props.guidLengthChanged(parseInt(e.target.value));
    e.persist();
  };

  render() {
    return (
      <div className="panel-wrapper">
        <Filter
          lengths={this.props.lengths}
          onChange={this.generateGuid}
          disabled={this.props.inProgress}
        />
        <Content />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inProgress: state.inProgress,
  lengths: state.lengths
});

const mapDispatchToProps = dispatch => {
  return {
    guidLengthChanged: guideLength => dispatch(guidLengthChanged(guideLength))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);
