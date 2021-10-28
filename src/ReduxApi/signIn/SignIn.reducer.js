import {
  FETCH_SIGNIN_SUCCESS,
  FETCH_SIGNIN_REQUEST,
  FETCH_SIGNIN_FAILURE,
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_REQUEST,
  FETCH_SIGNUP_FAILURE,
} from './SignIn.types';

const initialState = {
  loading: false,
  signinUser: [],
  signupUser: [],
  error: '',
};

const signinUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SIGNIN_SUCCESS:
      return {
        signinUser: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_SIGNIN_FAILURE:
      return {
        loading: false,
        signinUser: [],
        error: action.payload,
      };
    case FETCH_SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SIGNUP_SUCCESS:
      return {
        signupUser: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_SIGNUP_FAILURE:
      return {
        loading: false,
        signupUser: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default signinUserReducer;
