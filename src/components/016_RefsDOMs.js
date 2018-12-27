import React, { Component } from "react";

const Child = props => {
  return (
    <div className="flex-col">
      <input ref={props.childRef} />
    </div>
  );
};

const FuncComponent = () => {
  let buttonRef = null;
  let inputRef = null;

  let onClick = () => {
    console.log("====================================");
    console.log(buttonRef, inputRef);
    console.log("====================================");
  };

  return (
    <div>
      <Child childRef={input => (inputRef = input)} />
      <button ref={btn => (buttonRef = btn)} onClick={onClick}>
        <h3>Func Component</h3>
      </button>
    </div>
  );
};

class RefsDOMS extends Component {
  onClick() {
    alert(this.lastName.value + ", " + this.firstName.value);
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      if (event.target === this.firstName) {
        this.lastName.focus();
      } else if (event.target === this.lastName) {
        this.submit.click();
      }
    }
  }

  render() {
    return (
      <div>
        <h1>RefsDOMS: RefsDOMS components</h1>
        <div className="flex-row">
          <div className="flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              ref={input => (this.firstName = input)}
              onKeyUp={this.onKeyUp.bind(this)}
              type="text"
              name="firstName"
              id="firstName"
            />
          </div>
          <div className="flex-col">
            <label htmlFor="lastName">Last Name</label>
            <input
              onKeyUp={this.onKeyUp.bind(this)}
              ref={input => (this.lastName = input)}
              type="text"
              name="lastName"
              id="lastName"
            />
          </div>
          <button
            ref={input => (this.submit = input)}
            onClick={this.onClick.bind(this)}
          >
            <h3> - Done - </h3>
          </button>
          <FuncComponent />
        </div>
      </div>
    );
  }
}

export default RefsDOMS;
