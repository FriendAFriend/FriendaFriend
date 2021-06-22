export const createAccount = (userInfo) => {
  return (dispatch) => {
    dispatch({
      type: 'create account',
      payload: userInfo,
    });
  };
};

export const loginAccount = (userInfo) => {
  return (dispatch) => {
    dispatch({
      type: 'login account',
      payload: userInfo,
    });
  };
};


export const createUser = user => async (dispatch, getState) => {
  return dispatch => {
    dispatch({
      type: 'CREATE_USER',
      payload: user
    })
    const res = await fetch('POST', 'http://localhost:8080/api', user)
    const registeredUser = await res.json()
    dispatch({type: 'CREATE_USER', payload: registeredUser })
  }
}
