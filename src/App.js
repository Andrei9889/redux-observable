import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import Page from "./containers";

function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default App;
