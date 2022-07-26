/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  onIncrement,
  onDecrement,
  onAsyncIncrement,
} from "../redux-saga/actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class counter extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "10em" }}>
        <h1 style={{ marginBottom: "1em" }}>Redux-Saga</h1>
        <hr />
        <div>Clicked: {this.props.count} times</div>
        <div style={{padding: '10px'}}>
          <button onClick={this.props.onAsyncIncrement} style={{padding: '10px', margin: '10px', cursor: 'pointer'}}>Async-Increment</button>
          <button onClick={this.props.onIncrement} style={{padding: '10px', margin: '10px', cursor: 'pointer'}}>Increment</button>
          <button onClick={this.props.onDecrement} style={{padding: '10px', margin: '10px', cursor: 'pointer'}}>Decrement</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
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
  return bindActionCreators(
    {
      onIncrement: onIncrement,
      onDecrement: onDecrement,
      onAsyncIncrement: onAsyncIncrement,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispachToProps)(counter);
