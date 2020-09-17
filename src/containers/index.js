import React from "react";
import { connect } from "react-redux";
import { runIncrement, runDecrement } from '../store/actions';

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#45597a",
    color: "white",
    fontSize: "30px",
  },
};

const Page = ({ counter, increment, decrement }) => {
  return (
    <div style={styles.container}>
      <div>Counter: {counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default connect(
  (state) => state,
  dispatch => ({
    increment: () => dispatch(runIncrement()),
    decrement: () => dispatch(runDecrement())
}))(Page);
