import { combineReducers } from 'redux';
import { notificationDataReducer } from './Page/page.reducers';

const allReducers = combineReducers({
  pageData: notificationDataReducer,
});

export default allReducers;
