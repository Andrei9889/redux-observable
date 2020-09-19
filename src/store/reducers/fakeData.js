import { createReducer } from "redux-act";

import * as actions from "../actions";

const DEFAULT_STATE = {
  data: {},
  loading: false,
  error: null,
};

export default createReducer(
  {
    [actions.fakeDataLoading]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [actions.fakeDataRecieved]: (state, data) => ({
      ...state,
      data,
      loading: false,
    }),
    [actions.fakeDataErrorRecieved]: (state, error) => ({
      ...state,
      error,
      loading: false,
    }),
  },
  DEFAULT_STATE
);
