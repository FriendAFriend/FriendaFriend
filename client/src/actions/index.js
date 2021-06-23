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

export const addPhotos = (photosArray) => {
  return (dispatch) => {
    dispatch({
      type: 'addPhotos',
      payload: photosArray
    });
  };
};

export const uploadingSwitch = (boolean) => {
  return (dispatch) => {
    dispatch({
      type: 'uploadingSwitch',
      payload: boolean
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
