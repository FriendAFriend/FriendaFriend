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
      body: JSON.stringify(user),
    });

    const loggedInUser = await res.json();
    dispatch({ type: 'LOGIN_USER', payload: loggedInUser });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: true });
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

export const fetchListings = () => async (dispatch, getState) => {
  const res = await fetch('http://localhost:8080/api/dashboard');
  const listing = await res.json();
  console.log(listing, 'all listings from fetch');

  dispatch({
    type: 'FETCH_LISTINGS',
    payload: listing,
  });
};
//(listing) => console.log(listing)
export const filterListingsByName = (listings, name) => (dispatch) => {
  dispatch({
    type: 'FILTER_LIST_BY_NAME',
    payload: {
      name: name,
      listings: listings.filter((item) => item.listing_name.toLowerCase()),
    },
  });
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
