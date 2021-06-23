const initialStateListing = {
    user_id: userId,
    city: '',
    description: '',
    photo: [],
    rating: 0,
    start_date: new Date(),
    end_date: new Date(),
    pending_status: 'available',
  };


const listingReducer = (state = initialStateListing, action) => {
    switch (action.type) {
      case 'NEW_LISTING':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  
  export default listingReducer;