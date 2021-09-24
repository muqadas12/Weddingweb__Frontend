import {
  FETCH_CARRENT_REQUEST,
  FETCH_CARRENT_SUCCESS,
  FETCH_CARRENT_FAILURE,
} from './CarTypes';

const initialSate = {
  loading: false,
  carrent: [],
  err: '',
};
const carReducer = (state = initialSate, action) => {
  switch (action.type) {
    case FETCH_CARRENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CARRENT_SUCCESS:
      return {
        loading: false,
        carrent: action.payload,
        err: '',
      };
    case FETCH_CARRENT_FAILURE:
      return {
        loading: false,
        carrent: [],
        err: action.payload,
      };

    default:
      return state;
  }
};
export default carReducer;
