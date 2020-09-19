import { from, of } from "rxjs";
import { ofType } from 'redux-observable';
import { startWith, map, catchError, mergeMap } from "rxjs/operators";

import { fakeDataLoading, fakeDataRecieved, fakeDataErrorRecieved } from "../actions";

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 3000);
  });

export const getFakeDataEpic = (action$) =>
  action$.pipe(
    ofType("GET_FAKE_DATA"),
    mergeMap(() => from(promise1).pipe(
        map(response => fakeDataRecieved(response)),
        catchError((error) => of(fakeDataErrorRecieved(error))),
        startWith(fakeDataLoading()),
        )),
  );

