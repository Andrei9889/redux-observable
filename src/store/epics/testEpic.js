import { ofType } from 'redux-observable';
import { mapTo, delay } from "rxjs/operators";

import { increment, decrement } from "../actions";

export const incrementEpic = (action$) =>
  action$.pipe(
    ofType("RUN_INCREMENT"),
    delay(300),
    mapTo(increment())
  );

export const decrementEpic = (action$) =>
  action$.pipe(
    ofType("RUN_DECREMENT"),
    delay(300),
    mapTo(decrement())
  );
