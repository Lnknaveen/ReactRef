import React, { Component } from "react";

class AttrBind extends Component {
  render() {
    return (
      <div>
        <h1 data-true data-false={false} data-sum={1 + 1}>
          AttrBind: Look for attribute data-true, data-false, data-sum and
          className=class
        </h1>
      </div>
    );
  }
}

export default AttrBind;
