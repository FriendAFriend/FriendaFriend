import { combineReducers } from 'redux';
import userReducer from './userReducer';
import listingReducer from './listingReducer';

const rootReducer = combineReducers({
  userReducer,
  listings: listingReducer,
});

export default rootReducer;
