import React, { Component } from "react";

const CollectionRender = props => {
  return (
    <li>
      <h2 className="flex-row">
        <div>
          {props.sProp} - {props.nProp}
        </div>
        <input onChange={props.txtChangeEvent} value={props.sProp} />
        <button onClick={props.deleteEvent}>delete</button>
      </h2>
    </li>
  );
};

class ListAndKeys extends Component {
  constructor() {
    super();

    this.count = this.state.collection.length;
  }

  state = {
    collection: [
      { id: "1", stringProp: "S 1", numProp: 10 },
      { id: "2", stringProp: "S 2", numProp: 20 },
      { id: "3", stringProp: "S 3", numProp: 30 }
    ]
  };

  addEvent = () => {
    const cloneCollection = [...this.state.collection];
    const newCount = this.count + 1;

    cloneCollection.push({
      id: `${newCount}`,
      stringProp: `S ${newCount}`,
      numProp: newCount * 10
    });

    this.count++;

    this.setState({
      collection: cloneCollection
    });
  };

  deleteItem = index => {
    const cloneCollection = [...this.state.collection];
    cloneCollection.splice(index, 1);
    this.setState({
      collection: cloneCollection
    });
  };

  changeStringProp = (id, event) => {
    const index = this.state.collection.findIndex(d => {
      return d.id === id;
    });

    const cloneObj = { ...this.state.collection[index] };
    cloneObj.stringProp = event.target.value;

    const cloneCollection = [...this.state.collection];
    cloneCollection[index] = cloneObj;

    this.setState({
      collection: cloneCollection
    });
  };

  render() {
    return (
      <div>
        <h1>ListAndKeys: CRUD</h1>
        <button onClick={this.addEvent}>Add</button>
        <ul>
          {this.state.collection.map((data, index) => {
            return (
              <CollectionRender
                deleteEvent={this.deleteItem.bind(this, index)}
                txtChangeEvent={this.changeStringProp.bind(this, data.id)}
                key={data.id}
                sProp={data.stringProp}
                nProp={data.numProp}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListAndKeys;
