import React, { Component } from "react";

const Child = props => {
  return (
    <div className="flex-row">
      <button onClick={props.onChildClick}>
        <h2>{props.title}</h2>
      </button>
      <h2>{props.customTitle}</h2>
    </div>
  );
};

const Parent = props => {
  return (
    <div className="flex-col">
      <Child
        {...props}
        onChildClick={props.onChild1Click}
        customTitle="Title 1 from parent"
      />
      <Child
        {...props}
        onChildClick={props.onChild2Click}
        customTitle="Title 2 from parent"
      />
    </div>
  );
};

class ParentChildAndSiblings extends Component {
  state = {
    title: "Title from grand parent"
  };

  onChildClick = newTitle => {
    this.setState({
      title: newTitle
    });
  };

  render() {
    return (
      <div>
        <h1>ParentChildAndSiblings: Class component</h1>
        <Parent
          title={this.state.title}
          onChild1Click={this.onChildClick.bind(
            this,
            "Bind title from grand child 1 event"
          )}
          onChild2Click={this.onChildClick.bind(
            this,
            "Bind title from grand child 2 event"
          )}
        />
      </div>
    );
  }
}

export default ParentChildAndSiblings;
