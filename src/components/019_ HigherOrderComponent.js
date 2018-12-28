import React, { Component } from "react";
import ButtonOne from "./HigherOrderComponent/003_ButtonOne";

class HigherOrderComponent extends Component {
  render() {
    return (
      <div>
        <h1>HigherOrderComponent: Higher order component</h1>
        <div className="flex-row">
          <ButtonOne />
          <ButtonOne disable />
        </div>
      </div>
    );
  }
}

export default HigherOrderComponent;
