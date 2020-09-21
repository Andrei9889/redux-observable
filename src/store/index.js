import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import { ajax } from 'rxjs/ajax';

import rootEpic from "./epics";
import reducers from "./reducers";

const rootReducer = combineReducers(reducers);

const epicMiddleware = createEpicMiddleware({
  dependencies: { getJSON: ajax.getJSON }
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);
