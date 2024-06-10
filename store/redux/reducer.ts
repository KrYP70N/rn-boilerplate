import { combineReducers } from 'redux';
import sampleReducer from './reducer/sample.reducer';
import userReducer from './reducer/user.reducer';

const rootReducer = combineReducers({
  sample: sampleReducer,
  users: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
