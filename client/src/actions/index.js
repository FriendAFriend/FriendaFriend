import { useRouteMatch } from 'react-router';
import store from '../store';

export const createUser = (user) => async (dispatch, getState) => {
  console.log('from create action redux');
  const res = await fetch('http://localhost:8080/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const registeredUser = await res.json();
  console.log(registeredUser)
  dispatch({ type: 'CREATE_USER', payload: registeredUser });
};

export const loginUser = (user) => async (dispatch, getState) => {
  console.log('from create action redux login', user);

  try{
    const res = await fetch('http://localhost:8080/user/login', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    
    const loggedInUser = await res.json();
   
    loggedInUser.isLoggedIn = true
    console.log("here", loggedInUser)
    dispatch({ type: 'LOGIN_USER', payload: loggedInUser });
  } catch (err) {
    console.log("err here")
    user.isLoggedIn = false
    dispatch({ type: 'LOGIN_USER', payload: user });
    //dispatch({ type: 'LOGIN_FAILURE', payload: true });
  }
};

export const createListing = (listing) => async (dispatch, getState) => {
  const res = await fetch('http://localhost:8080/api/newListing', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(listing),
  });
  const newListing = await res.json();
  dispatch({ type: 'NEW_LISTING', payload: newListing });
};

// store.dispatch({
//   type: 'createAccount',
//   payload: {
//     description: 'userInfo',
//   },
// });
export const fetchListings = () => async (dispatch, getState) => {
  const res = await fetch('http://localhost:8080/api/dashboard');
  const listing = await res.json();
  console.log(listing, 'all listings from fetch');

  dispatch({
    type: 'FETCH_LISTINGS',
    payload: listing,
  });
};

export const filterListingsByName = (listings, name) => (dispatch) => {
  dispatch({
    type: 'FILTER_LIST_BY_NAME',
    payload: {
      name: name,
      listings: listings.filter((item) => {
        return item.listing_name.match(new RegExp(name, 'g'));
      }),
    },
  });
  console.log('filter from actions', listings);
};

export const filterListingsByCity = (listings, location) => (dispatch) => {
  dispatch({
    type: 'FILTER_LIST_BY_CITY',
    payload: {
      location: location,
      listings: listings.filter((item) =>
        item.city.toLowerCase().startsWith(location)
      ),
    },
  });
};

export const getTrips = (userId) => async (dispatch, getState) => {
  console.log("hit get trips with" , userId)
  const res = await fetch(`http://localhost:8080/user/getTrips/${userId}`)
  const userTrips = await res.json()
  dispatch({ type: 'GET_USER_TRIPS', payload: userTrips})
}

// ! photo upload actions, experimental

export const addPhotos = (photosArray) => {
  return (dispatch) => {
    dispatch({
      type: 'addPhotos',
      payload: photosArray,
    });
  };
};

export const clearPhotos = () => {
  return (dispatch) => {
    dispatch({
      type: 'clearPhotos',
    });
  };
};

export const uploadingSwitch = (bool) => {
  return (dispatch) => {
    dispatch({
      type: 'uploadingSwitch',
      payload: bool,
    });
  };
};
export const updateListing = (listing, availabilty, booked_by) => async (dispatch, getState) => {
  console.log("we made it to the update listing action creator")
  const res = await fetch(`http://localhost:8080/api/updateListing/${listing}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(listing, availabilty, booked_by ),
  });
  const updateListing = await res.json();
  console.log("response from fetch req")
  dispatch({ type: 'UPDATE_LISTING', payload: updateListing });
};
