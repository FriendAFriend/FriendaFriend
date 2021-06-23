import store from '../store';

export const createAccount = (userInfo) => {
  return (dispatch) => {
    dispatch({
      type: 'createAccount',
      payload: userInfo,
    });
  };
};

export const loginAccount = (userInfo) => {
  return (dispatch) => {
    dispatch({
      type: 'loginAccount',
      payload: userInfo,
    });
  };
};

// store.dispatch({
//   type: 'createAccount',
//   payload: {
//     description: 'userInfo',
//   },
// });

// store.dispatch({
//   type: 'loginAccount',
//   payload: {
//     description: 'userInfo',
//   },
// });
