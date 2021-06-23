import { combineReducers } from 'redux';
import userReducer from './userReducer';
import listingReducer from './listingReducer'

const rootReducer = combineReducers({
  userReducer,
  listingReducer,
});

export default rootReducer;
