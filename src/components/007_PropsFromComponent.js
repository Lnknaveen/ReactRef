import React, { Component } from "react";

const DataComponent = props => {
  const prop = props.prop ? props.prop : "NO-PROP";

  return props.children ? (
    <li>
      <h2>
        Data: {props.children}, Prop: {prop}
      </h2>
    </li>
  ) : (
    <li>
      <h2>Invalid entry</h2>
    </li>
  );
};

class PropsFromComponent extends Component {
  render() {
    return (
      <div>
        <h1>PropsFromComponent: {this.props.title}</h1>
        <ul className="flex-row">
          <DataComponent prop="one">Data 1</DataComponent>
          <DataComponent prop="two">Data 2</DataComponent>
          <DataComponent>Data 3</DataComponent>
          <DataComponent />
        </ul>
      </div>
    );
  }
}

export default PropsFromComponent;
