import store from '../store';

export const createUser = (user) => async (dispatch, getState) => {
  const res = await fetch('http://localhost:8080/api', user);
  const registeredUser = await res.json();
  dispatch({ type: 'CREATE_USER', payload: registeredUser });
};
// export const createUser = (user) => async (dispatch, getState) => {
//   return (dispatch) => {
//     dispatch({
//       type: 'CREATE_USER',
//       payload: user,
//     });
//     const res = fetch('POST', 'http://localhost:8080/api', user);
//     const registeredUser = await res.json();
//     dispatch({ type: 'CREATE_USER', payload: registeredUser });
//   };
// };

export const loginUser = (userInfo) => {
  return (dispatch) => {
    dispatch({
      type: 'loginUser',
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
