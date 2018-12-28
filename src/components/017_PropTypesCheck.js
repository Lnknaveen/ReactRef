import React, { Component } from "react";
import PropTypes from "prop-types";

const TypeCheck = props => {
  return (
    <div>
      <h2>propStr: {props.propStr}</h2>
      <h2>propNum: {props.propNum}</h2>
      <h2>propStrOrNum: {props.propStrOrNum}</h2>
      <h2>propArray: {props.propArray.join(" | ")}</h2>
      <h2>
        PropShape:
        {props.propShape.map(s => {
          return <span key={s.name}>{s.name}</span>;
        })}
      </h2>
    </div>
  );
};

TypeCheck.propTypes = {
  propStr: PropTypes.string,
  propNum: PropTypes.number,
  propStrOrNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  propArray: PropTypes.arrayOf(PropTypes.number),
  propShape: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.name
    })
  )
};

class PropTypesCheck extends Component {
  render() {
    return (
      <div>
        <h1>PropTypesCheck: Props types check</h1>
        <TypeCheck
          propStr={"String"}
          propNum={30}
          propStrOrNum={10}
          propArray={[11, 22, 33]}
          propShape={[
            {
              name: "Name"
            }
          ]}
        />
      </div>
    );
  }
}

export default PropTypesCheck;
