//@flow
import React, { Component } from "react";
import "./App.css";
import ComponentByCode from "./components/002_ComponentByCode";
import AttrBind from "./components/001_AttrBinding";
import ComponentByXML from "./components/003_ComponentByXML";
import ComponentByFn from "./components/004_ComponentByFn";
import ClassComponent from "./components/005_ClassComponent";
import Es6FnComponent from "./components/006_ES6FnComponent";
import PropsFromComponent from "./components/007_PropsFromComponent";
import StateAndProps from "./components/008_StateAndProps";
import TwoWayAndEvent from "./components/009_TwoWayAndEvent";
import ParentChildAndSiblings from "./components/010_ParentChildAndSiblings";
import ListAndKeys from "./components/011_ListAndKeys";
import UsingFragments from "./components/012_Fragments";
import LifeCycleHooks from "./components/013_LifeCycleHooks";
import PureComponent from "./components/014_PureComponent";
import RouterComponent from "./components/015_RouterComponents";
import RefsDOMS from "./components/016_RefsDOMs";
import PropTypesCheck from "./components/017_PropTypesCheck";
import FlowCheck from "./components/018_FlowCheck";
import HigherOrderComponent from "./components/019_ HigherOrderComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AttrBind />
        <ComponentByCode />
        <ComponentByXML />
        <ComponentByFn />
        <ClassComponent />
        <Es6FnComponent />
        <PropsFromComponent title="Data from app component" />
        <StateAndProps />
        <TwoWayAndEvent />
        <ParentChildAndSiblings />
        <ListAndKeys />
        <UsingFragments />
        <LifeCycleHooks />
        <PureComponent />
        <RouterComponent />
        <RefsDOMS />
        <PropTypesCheck />
        <FlowCheck />
        <HigherOrderComponent />
      </div>
    );
  }
}

export default App;
