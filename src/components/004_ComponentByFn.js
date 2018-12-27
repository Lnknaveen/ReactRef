import React, { Component } from "react";

function CodeByFn() {
  return <h1>ComponentByFn: Component by function</h1>;
}

class ComponentByFn extends Component {
  render() {
    return (
      <div>
        <CodeByFn />
      </div>
    );
  }
}

export default ComponentByFn;
