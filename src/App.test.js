import React from "react";
import { render } from "@testing-library/react";

import { toArray } from "rxjs/operators";
import { of } from "rxjs";

import { getFakeDataEpic } from "./store/epics/fakeDataEpic";

import App from "./App";

it("Test epic", (done) => {
  const action$ = of({ type: "GET_FAKE_DATA", payload: 1 });
  const mockResponse = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };
  const state$ = null;

  const dependencies = {
    getJSON: (url) => of(mockResponse),
  };

  const result$ = getFakeDataEpic(action$, state$, dependencies).pipe(
    toArray()
  );

  result$.subscribe((actions) => {
    const expected = {
      type: 'FAKE_DATA_RECIEVED',
      payload: mockResponse,
      error: false
    }
    const actual = actions.find(action => action.type === 'FAKE_DATA_RECIEVED')
    if(JSON.stringify(actual) === JSON.stringify(expected)) {
      done()
    } else done({
      expexted: JSON.stringify(expected),
      actual: JSON.stringify(actual)
    })
  });
});

test("Render initial page with buttons", () => {
  const { getByText } = render(<App />);
  const incrementElement = getByText(/Increment/);
  const decrementElement = getByText(/Decrement/);
  const getNewDataElement = getByText(/Get new data/);
  expect(incrementElement).toBeInTheDocument();
  expect(decrementElement).toBeInTheDocument();
  expect(getNewDataElement).toBeInTheDocument();
});
