import { combineEpics } from "redux-observable";
import { incrementEpic, decrementEpic } from "./counterEpic";
import { getFakeDataEpic } from "./fakeDataEpic";

export default combineEpics(incrementEpic, decrementEpic, getFakeDataEpic);
