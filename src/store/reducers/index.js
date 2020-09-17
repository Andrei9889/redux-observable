import { createReducer } from 'redux-act';

import * as actions from '../actions';

const DEFAULT_STATE = {
  counter: 0
};

export default createReducer(
  {
    [actions.increment]: (state) => ({ ...state, counter: state.counter + 1 }),
    [actions.decrement]: (state) => ({ ...state, counter: state.counter - 1 })
  },
  DEFAULT_STATE
);
