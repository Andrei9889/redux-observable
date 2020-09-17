import { combineEpics } from "redux-observable";
import {incrementEpic, decrementEpic} from "./testEpic";

export default combineEpics(incrementEpic, decrementEpic);
