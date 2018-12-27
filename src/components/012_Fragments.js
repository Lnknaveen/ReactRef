import React, { Component } from "react";

const Temp = props => {
  return props.target === "one" ? (
    <>
      <h2>One</h2>
      <div key="1">Frag 1</div>
      <div key="2">Frag 2</div>
    </>
  ) : (
    <>
      <h2>Two</h2>
      <div key="1">Frag 1</div>
      <div key="2">Frag 2</div>
    </>
  );
};

class UsingFragments extends Component {
  render() {
    return (
      <div>
        <h1>UsingFragments: Fragments</h1>
        <Temp target="one" />
      </div>
    );
  }
}

export default UsingFragments;
