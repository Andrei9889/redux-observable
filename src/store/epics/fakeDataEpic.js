import { of } from "rxjs";
import { ofType } from "redux-observable";
import { startWith, map, catchError, mergeMap } from "rxjs/operators";

import {
  fakeDataLoading,
  fakeDataRecieved,
  fakeDataErrorRecieved,
} from "../actions";

export const getFakeDataEpic = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofType("GET_FAKE_DATA"),
    mergeMap((action) =>
      getJSON(
        `https://jsonplaceholder.typicode.com/todos/${action.payload}`
      ).pipe(
        map((response) => fakeDataRecieved(response)),
        catchError((error) => of(fakeDataErrorRecieved(error))),
        startWith(fakeDataLoading())
      )
    )
  );
