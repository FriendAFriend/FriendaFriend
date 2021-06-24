

const initialUserState = {
  legal_name: '',
  username: '',
  email: '',
  password1: '',
  password2: '',
}

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return { ...state, ...action.payload };
    case 'LOGIN_USER':
      return { 
        loggedIn: true,
        user: action.payload
      };
    case 'LOGIN_FAILURE':
      return {...state, loginErr: action.payload}
      case 'GET_USER_TRIPS':
        return {...state, userTrips: action.payload}
    default:
      return state;
  }
};


export default userReducer;

