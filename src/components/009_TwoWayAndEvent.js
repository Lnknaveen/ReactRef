import React, { Component } from "react";

class TwoWayAndEvent extends Component {
  state = {
    name: "Initial State"
  };

  changeName = newName => {
    this.setState({
      name: newName
    });
  };

  changeNameByInput = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>TwoWayAndEvent: TwoWay</h1>
        <div className="flex-col">
          <div className="flex-row">
            <button
              onClick={() => {
                this.changeName("using anonymous inline method");
              }}
            >
              <h2>Change State Anonymous method</h2>
            </button>
            <button
              onClick={this.changeName.bind(this, "using bind inline method")}
            >
              <h2>Change State Bind method</h2>
            </button>
            <input
              type="text"
              onChange={this.changeNameByInput}
              value={this.state.name}
            />
          </div>
          <h2>{this.state.name}</h2>
        </div>
      </div>
    );
  }
}

export default TwoWayAndEvent;
