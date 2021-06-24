const initialStateListing = {
  user_id: null,
  city: '',
  description: '',
  photo: [],
  rating: 0,
  start_date: new Date(),
  end_date: new Date(),
  pending_status: 'available',
  booked_by: 0,
};

const listingReducer = (state = initialStateListing, action) => {
  switch (action.type) {
    case 'NEW_LISTING':
      return { ...state, ...action.payload };
    case 'UPDATE_LISTING':
      return { ...state, ...action.payload.booked_by };
    default:
      return state;
  }
};

export default listingReducer;
