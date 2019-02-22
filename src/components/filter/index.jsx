import React, { Component } from "react";
import "./style.css";

class Filter extends Component {
  state = {};
  render() {
    return (
      <div className="filter-wrapper">
        <div>
          32
          <input
            type="radio"
            name="guide-length"
            value="32"
            disabled={this.props.disabled}
            onClick={this.props.fetchTheData}
          />
        </div>
        <div>
          16
          <input
            type="radio"
            name="guide-length"
            value="16"
            disabled={this.props.disabled}
            onClick={this.props.fetchTheData}
          />
        </div>
        <div>
          10
          <input
            type="radio"
            name="guide-length"
            value="10"
            disabled={this.props.disabled}
            onClick={this.props.fetchTheData}
          />
        </div>
        <div>
          6
          <input
            type="radio"
            name="guide-length"
            value="6"
            disabled={this.props.disabled}
            onClick={this.props.fetchTheData}
          />
        </div>
        <div>
          3
          <input
            type="radio"
            name="guide-length"
            value="3"
            disabled={this.props.disabled}
            onClick={this.props.fetchTheData}
          />
        </div>
      </div>
    );
  }
}

export default Filter;
