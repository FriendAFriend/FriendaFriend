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
