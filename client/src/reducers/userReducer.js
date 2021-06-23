const initialState = {
  user_id: null,
  legal_name: '',
  city: '',
  description: '',
  pet_count: '',
  username: '',
  password: '',
  phone: null,
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return { ...state };
    case 'loginAccount':
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;

// user: {
//   user_id: 4,
//   legal_name: 'Erik',
//   city: 'chicago',
//   description: 'description',
//   pet_count: '2',
//   username: 'easy1',
//   password: 'password1',
//   phone: 7735612245,
//   email: 'erik@me.com',
// },
