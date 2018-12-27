import React, { Component } from "react";

class ChildLifeCycleHooks extends Component {
  constructor() {
    super();
    console.log("ChildLifeCycleHooks: constructor");
  }

  componentWillMount() {
    console.log("ChildLifeCycleHooks: componentWillMount");
  }

  componentDidMount() {
    console.log("ChildLifeCycleHooks: componentDidMount");
  }

  componentWillReceiveProps() {
    console.log("ChildLifeCycleHooks: componentWillReceiveProps");
  }

  componentWillUpdate() {
    console.log("ChildLifeCycleHooks: componentWillUpdate");
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log(
      "ChildLifeCycleHooks: shouldComponentUpdate",
      nextProp,
      nextState
    );
    return true;
  }

  componentDidUpdate(prevProps, prevStates) {
    console.log(
      "ChildLifeCycleHooks: componentDidUpdate",
      prevProps,
      prevStates
    );
  }

  componentWillUnmount() {
    console.log("ChildLifeCycleHooks: componentWillUnmount");
  }

  render() {
    console.log("ChildLifeCycleHooks: render");

    return (
      <div>
        <h2>ChildLifeCycleHooks</h2>
      </div>
    );
  }
}

class LifeCycleHooks extends Component {
  state = {
    name: "render"
  };

  constructor() {
    super();
    console.log("constructor");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("shouldComponentUpdate", nextProp, nextState);
    return true;
  }

  changeState() {
    this.setState({ name: "change state" });
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevStates) {
    console.log("componentDidUpdate", prevProps, prevStates);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  unmountChild() {
    this.setState({
      name: "remove"
    });
  }

  render() {
    console.log("render");

    return this.state.name !== "remove" ? (
      <div>
        <h1>LifeCycleHooks: Output at the console</h1>
        <ChildLifeCycleHooks />
        <div className="flex-row">
          <button onClick={this.changeState.bind(this)}>
            <h2>Change state</h2>
          </button>
          <button onClick={this.unmountChild.bind(this)}>
            <h2>Unmount child</h2>
          </button>
        </div>
      </div>
    ) : (
      <div>
        <h1>LifeCycleHooks: Gone</h1>
      </div>
    );
  }
}

export default LifeCycleHooks;
