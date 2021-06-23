import { combineReducers } from 'redux';
import userReducer from './userReducer';
import listingReducer from './listingReducer';
import createListingReducer from './createListingReducer';

const rootReducer = combineReducers({
  userReducer,
  createListingReducer,
  listings: listingReducer,
});

export default rootReducer;
