import store from '../store';

export const createUser = (user) => async (dispatch, getState) => {
  console.log('from create action redux');
  const res = await fetch('http://localhost:8080/user/signup', user);
  const registeredUser = await res.json();
  dispatch({ type: 'CREATE_USER', payload: registeredUser });
};

export const loginUser = (userInfo) => {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN_USER',
      payload: userInfo,
    });
  };
};

export const fetchListings = () => (dispatch) => {
  fetch('http://localhost:8080/api')
    .then((res) => res.json())
    .then(
      dispatch({
        type: 'FETCH_LISTINGS',
        payload: listing.data,
      })
      //(listing) => console.log(listing)
    );
};

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
