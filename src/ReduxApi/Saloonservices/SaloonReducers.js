import {
  FETCH_SALOON_SERVICE_REQUEST,
  FETCH_SALOON_SERVICE_SUCCESS,
  FETCH_SALOON_SERVICE_FAILURE,
  SET_SELECTED_EMAIL,
  SET_SELECTED_DEALER,
  SET_SELECTED_PRICE,
} from './SaloonTypes';

const initialSate = {
  loading: false,
  saloonser: [],
  selectedEmail: {},
  selectedDealer: {},
  setSelectedPrice: {},
  err: '',
};

const saloonReducer = (state = initialSate, action) => {
  switch (action.type) {
    case FETCH_SALOON_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SALOON_SERVICE_SUCCESS:
      return {
        loading: false,
        saloonser: action.payload,
        err: '',
      };
    case FETCH_SALOON_SERVICE_FAILURE:
      return {
        loading: false,
        saloonser: [],
        err: action.payload,
      };
    case SET_SELECTED_EMAIL:
      return {
        ...state,
        selectedEmail: action.payload,
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

    default:
      return state;
  }
};
export default saloonReducer;
