import React, { Component } from "react";

class ComponentByCode extends Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "ComponentByCode: Component render by Code"
      )
    );
  }
}

export default ComponentByCode;
