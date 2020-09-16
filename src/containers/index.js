import React from "react";
import { connect } from "react-redux";

const Page = ({ counter }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#45597a",
        color: "white",
        fontSize: "30px",
      }}
    >
      <div>Counter: {counter}</div>
    </div>
  );
};

export default connect(
  (state) => state,
  null
)(Page);

// export default connect(
//   ({ constructor: { champ }}) => ({ champ }),
//   dispatch => ({
//     setChamp: champ => dispatch(setChamp(champ)),
//     sendChamp: () => dispatch(sendChamp())
// }))(ConstructorPage);
