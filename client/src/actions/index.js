import store from '../store';

export const createUser = (user) => async (dispatch, getState) => {
  console.log('from create action redux');
  const res = await fetch('http://localhost:8080/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  });
  const registeredUser = await res.json();
  dispatch({ type: 'CREATE_USER', payload: registeredUser });
};

export const loginUser = (user) => async (dispatch, getState) => {
  console.log('from create action redux login');
  const res = await fetch('http://localhost:8080/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  });

  const loggedInUser = await res.json();

  try {
    if(loggedInUser){
      dispatch({ type: 'LOGIN_USER', payload: loggedInUser})
    }
  } catch(err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: true })
  }
 
  
};


// export const loginUser = (userInfo) => {
//   return (dispatch) => {
//     dispatch({
//       type: 'loginUser',
//       payload: userInfo,
//     });
//   };
// };

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
