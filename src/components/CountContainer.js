import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  light: state
});

const CountComponent = ({ count, dispatch }) => (
  <div>
    <p>{count}</p>
    <button onClick={() => dispatch({ type: 'ADD' })}> Add </button>
    <button onClick={() => dispatch({ type: 'REMOVE' })}> Remove </button>
  </div>
);

export default connect(mapStateToProps)(CountComponent);