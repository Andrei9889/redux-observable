import React from 'react';
import { render } from '@testing-library/react';

import { ActionsObservable } from 'redux-observable';
import { ofType } from "redux-observable";
import { startWith, map, catchError, mergeMap, toArray } from "rxjs/operators";
import { of } from 'rxjs';
import {
  getFakeDataEpic
} from './store/epics/fakeDataEpic';

import {
  fakeDataLoading,
  fakeDataRecieved,
  fakeDataErrorRecieved,
  getFakeData
} from "./store/actions";

import App from './App';

test('Render initial page with buttons', () => {
  const { getByText } = render(<App />);
  const incrementElement = getByText(/Increment/);
  const decrementElement = getByText(/Decrement/);
  const getNewDataElement = getByText(/Get new data/);
  expect(incrementElement).toBeInTheDocument();
  expect(decrementElement).toBeInTheDocument();
  expect(getNewDataElement).toBeInTheDocument();
});

it('Test epic', (done) => {
  const action$ = of({ type: 'GET_FAKE_DATA', payload: 1 });
  const mockResponse = {"userId":1,"id":1,"title":"delectus aut autem","completed":false};
  const state$ = null;

  const dependencies = {
    getJSON: url => of(mockResponse)
  };

  const result$ = getFakeDataEpic(action$, state$, dependencies).pipe(
    toArray() // buffers output until your Epic naturally completes()
  );

  result$.subscribe(actions => {
    console.log(actions)
    
    // assertDeepEqual(actions, [{
    //   type: 'FAKE_DATA_RECIEVED',
    //   payload: mockResponse
    // }]);
  });
});
