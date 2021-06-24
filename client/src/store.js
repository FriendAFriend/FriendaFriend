import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

//const reducer = () => {};

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
