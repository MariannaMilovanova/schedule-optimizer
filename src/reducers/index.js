import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import schedule from './schedule';

const rootReducer = combineReducers({
  form: formReducer,
  schedule
});

export default rootReducer;
