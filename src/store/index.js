import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";

import rootEpic from "./epics";
import reducers from "./reducers";

const rootReducer = combineReducers(reducers);

const epicMiddleware = createEpicMiddleware();

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);
