import { createAction } from 'redux-act';

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');

export const runIncrement = createAction('RUN_INCREMENT');
export const runDecrement = createAction('RUN_DECREMENT');
