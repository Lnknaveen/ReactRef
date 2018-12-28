import React from "react";
import StylesWrapper from "./002_StylesWrapper";

const ButtonOne = props => {
  return (
    <button>
      <h2 style={props.styles}>This is a button one</h2>
    </button>
  );
};

export default StylesWrapper(ButtonOne);
