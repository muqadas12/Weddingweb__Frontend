import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_DELETE_REQUEST,
  FETCH_DELETE_SUCCESS,
  FETCH_DELETE_FAILURE,
  FETCH_UPDATE_REQUEST,
  FETCH_UPDATE_SUCCESS,
  FETCH_UPDATE_FAILURE,
} from './userTypes';

const initialState = {
  loading: false,
  users: [],
  delusers: [],
  updateUser: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    case FETCH_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DELETE_SUCCESS:
      return {
        loading: false,
        delusers: state.delusers.filter(
          (user) => user.id !== action.payload.id
        ),
        error: '',
      };
    case FETCH_DELETE_FAILURE:
      return {
        loading: false,
        delusers: [],
        error: action.payload,
      };
    case FETCH_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_UPDATE_SUCCESS:
      return {
        loading: false,
        updateUser: action.payload.updateUsers,
        error: '',
      };
    case FETCH_UPDATE_FAILURE:
      return {
        loading: false,
        updateUser: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
