/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  onIncrement,
  onDecrement,
  onAsyncIncrement,
} from "../actions/counter-action";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

function counter(props) {
  return (
    <div style={{ marginTop: "10em" }}>
      <div>Clicked: {props.count} times</div>
      <hr />
      <button onClick={props.onAsyncIncrement}>Async-Increment</button>
      <button onClick={props.onIncrement}>Increment</button>
      <button onClick={props.onDecrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    count: state.count,
  };
};

// const mapDispachToProps = (dispatch) => {
//   return {
//     onIncrement: () => dispatch({ type: "INCREMENT" }),
//     onDecrement: () => dispatch({ type: "DECREMENT" }),
//     onAsyncIncrement: () => dispatch({ type: "INCREMENT_ASYNC" }),
//   };
// };

const mapDispachToProps = (dispatch) => {
  return bindActionCreators({
    onIncrement: onIncrement,
    onDecrement: onDecrement,
    onAsyncIncrement: onAsyncIncrement,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispachToProps)(counter);
