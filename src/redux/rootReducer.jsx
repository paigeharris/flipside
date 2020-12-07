import { combineReducers } from 'redux';

import records from './reducers/records';

const rootReducer = combineReducers({
  records,
});

export default rootReducer;
