import {
  FETCH_CARRENT_REQUEST,
  FETCH_CARRENT_SUCCESS,
  FETCH_CARRENT_FAILURE,
  SET_SELECTED_DEALER,
  SET_SELECTED_PRICE,
  SET_SELECTED_EMAIL,
} from './CarTypes';

const initialSate = {
  loading: false,
  carrent: [],
  selectedDealer: {},
  selectedEmail: {},
  setSelectedPrice: {},
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
    case SET_SELECTED_DEALER:
      return {
        ...state,
        selectedDealer: action.payload,
      };
    case SET_SELECTED_PRICE:
      return {
        ...state,
        setSelectedPrice: action.payload,
      };
    case SET_SELECTED_EMAIL:
      return {
        ...state,
        selectedEmail: action.payload,
      };

    default:
      return state;
  }
};
export default carReducer;
