import { createStore } from 'redux';
import {thunk, ThunkAction} from 'redux-thunk'
import rootReducer, { RootState } from './reducer';

const reduxStore = createStore(
  rootReducer,
);

export default reduxStore;
