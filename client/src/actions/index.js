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
  try {
    const res = await fetch('http://localhost:8080/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    });
  
    const loggedInUser = await res.json();
    dispatch({ type: 'LOGIN_USER', payload: loggedInUser})

  } catch(err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: true })
  }
 
  
};

export const createListing = (listing) => async (dispatch, getState) => {
  const res = await fetch('http://localhost:8080/api/newListing', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(listing)
})
 const newListing = await res.json()
 dispatch({ type: 'NEW_LISTING', payload: newListing})
}