import React, { Component } from "react";

const Temp = props => {
  return (
    <div>
      <h2>{props.val}</h2>
    </div>
  );
};

class PureComponent extends Component {
  state = {
    val: 1
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { val: 1 };
      });
    }, 2000);
  }

  shouldComponentUpdate(nextProp, nextState) {
    return this.state.val !== nextState.val;
  }

  render() {
    return (
      <div>
        <h1>PureComponents: pure components</h1>
        <Temp val={this.state.val} />
      </div>
    );
  }
}

export default PureComponent;
