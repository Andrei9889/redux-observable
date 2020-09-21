import axios from "axios";
import { from, of } from "rxjs";
import { ofType } from "redux-observable";
import { startWith, map, catchError, mergeMap } from "rxjs/operators";

import {
  fakeDataLoading,
  fakeDataRecieved,
  fakeDataErrorRecieved,
} from "../actions";

export const getFakeDataEpic = (action$) =>
  action$.pipe(
    ofType("GET_FAKE_DATA"),
    mergeMap(action =>
      from(axios.get(`https://jsonplaceholder.typicode.com/todos/${action.payload}`)).pipe(
        map((response) => fakeDataRecieved(response.data)),
        catchError((error) => of(fakeDataErrorRecieved(error))),
        startWith(fakeDataLoading())
      )
    )
  );
