import React, { Component } from "react";

const FnComponent = props => {
  return (
    <div>
      <h3>
        child: {props.children}, prop: {props.prop}
      </h3>
    </div>
  );
};

class StateAndProps extends Component {
  state = {
    data: [
      {
        child: "Child 1",
        prop: "Prop 1"
      },
      {
        child: "Child 2",
        prop: "Prop 2"
      }
    ],
    title: "State List"
  };

  staticChangeProp = () => {
    this.setState({
      data: [
        {
          child: this.state.data[0].child,
          prop: "Changed Prop 1"
        },
        {
          child: this.state.data[1].child,
          prop: "Changed Prop 2"
        }
      ]
    });
  };

  dynamicChangeProp = () => {
    const newState = this.state.data.map(d => {
      return { ...d, child: "Dynamic " + d.child };
    });

    this.setState({
      data: newState
    });
  };

  render() {
    return (
      <div>
        <h1>StateAndProps: {this.state.title}</h1>
        <div className="flex-row">
          <button onClick={this.staticChangeProp}>
            <h2> Static Change Prop </h2>
          </button>
          <button onClick={this.dynamicChangeProp}>
            <h2> Dynamic Change Prop </h2>
          </button>
        </div>

        <h2>Static binding</h2>
        <div className="flex-row white-back">
          <FnComponent prop={this.state.data[0].prop}>
            {this.state.data[0].child}
          </FnComponent>
          <FnComponent prop={this.state.data[1].prop}>
            {this.state.data[1].child}
          </FnComponent>
        </div>

        <h2>Dynamic binding</h2>
        <div className="flex-row white-back">
          {this.state.data.map(d => {
            return (
              <FnComponent key={d.prop} prop={d.prop}>
                {d.child}
              </FnComponent>
            );
          })}
        </div>
      </div>
    );
  }
}

export default StateAndProps;
