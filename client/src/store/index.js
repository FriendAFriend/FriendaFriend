import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
const reducer = () => {
  user = {
    user_id: 4,
    legal_name: 'Erik',
    city: 'chicago',
    description: 'description',
    pet_count: '2',
    username: 'easy1',
    password: 'password1',
    phone: 7735612245,
    email: 'erik@me.com',
  };
};

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default store;
