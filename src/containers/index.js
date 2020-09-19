import React from "react";
import { connect } from "react-redux";
import { runIncrement, runDecrement, getFakeData } from '../store/actions';

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
  fakeDataContainer: {
    display: "flex",
    flexDirection: 'column',
    marginTop: '20px',
    justifyContent: "center",
    alignItems: "center",
  }
};

const Page = ({ counter, fakeData, increment, decrement, getNewData }) => {
  return (
    <div style={styles.container}>
      <div>Counter: {counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div style={styles.fakeDataContainer}>
        <div>{JSON.stringify(fakeData)}</div>
        <button onClick={getNewData}>Get new data</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ counter, fakeData }) => ({ counter: counter.counter, fakeData });

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(runIncrement()),
    decrement: () => dispatch(runDecrement()),
    getNewData: () => dispatch(getFakeData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page)
