/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  onIncrement,
  onDecrement,
  onAsyncIncrement,
} from "../redux-saga/actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

class counter extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "10em" }}>
        <div>Clicked: {this.props.count} times</div>
        <hr />
        <button onClick={this.props.onAsyncIncrement}>Async-Increment</button>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
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
  return bindActionCreators({
    onIncrement: onIncrement,
    onDecrement: onDecrement,
    onAsyncIncrement: onAsyncIncrement,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispachToProps)(counter);
