import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";

const StateLess = params => {
  return <h2>Component, {params.param}</h2>;
};

class RouterComponent extends Component {
  state = {
    loggedIn: false
  };

  login() {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }));
  }

  render() {
    return (
      <Router>
        <div>
          <h1>RouterComponents: router components</h1>
          <div className="flex-col">
            <button onClick={this.login.bind(this)}>
              <h2>{!this.state.loggedIn ? "LOGIN" : "LOGOUT"}</h2>
            </button>
          </div>
          <div className="flex-row">
            <NavLink activeClassName="active" to="/" exact>
              <h3>Home</h3>
            </NavLink>
            <NavLink to="/abc">
              <h3>ABC</h3>
            </NavLink>
            <NavLink to="/xyz/">
              <h3>XYZ</h3>
            </NavLink>
            <NavLink to="/COM/Hi">
              <h3>COMPONENT: Hi</h3>
            </NavLink>
            <NavLink to="/COM/Hallo">
              <h3>COMPONENT: Hallo</h3>
            </NavLink>
          </div>
          <Prompt
            when={!this.state.loggedIn}
            message={location => {
              return location.pathname.startsWith("/COM")
                ? "Are you sure, you are not logged in?"
                : true;
            }}
          />

          <Route
            path="/"
            render={() => {
              return <h2>Press Login to navigate to COMPONENT</h2>;
            }}
          />

          <Route
            exact
            path="/ABC"
            render={() => {
              return <h2>You are at ABC</h2>;
            }}
          />
          <Route
            exact
            strict
            path="/XYZ/"
            render={() => {
              return <h2>You are at XYZ</h2>;
            }}
          />
          <Route
            exact
            strict
            path="/COM/:param"
            render={({ match }) =>
              this.state.loggedIn ? (
                <StateLess param={match.params.param} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </div>
      </Router>
    );
  }
}

export default RouterComponent;
