const initialState = {
  listings: [],
  filteredListings: [],
  name: '',
  location: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_LISTINGS':
      return {
        ...state,
        listings: action.payload,
        filteredListings: action.payload,
      };
    case 'FILTER_LIST_BY_NAME':
      return {
        ...state,
        filteredListings: action.payload.listings,
        name: action.payload.name,
      };
    case 'FILTER_LIST_BY_CITY':
      return {
        ...state,
        filteredListings: action.payload.listings,
        location: action.payload.location,
      };
    default:
      return state;
  }
}
