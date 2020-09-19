import { createAction } from 'redux-act';

export const fakeDataLoading = createAction('FAKE_DATA_LOADING');
export const fakeDataRecieved = createAction('FAKE_DATA_RECIEVED');
export const fakeDataErrorRecieved = createAction('FAKE_DATA_ERROR_RECIEVED');

export const getFakeData = createAction('GET_FAKE_DATA');
