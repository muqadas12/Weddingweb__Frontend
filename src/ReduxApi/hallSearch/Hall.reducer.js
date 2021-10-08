import {
  FETCH_HALLSEARCH_REQUEST,
  FETCH_HALLSEARCH_SUCCESS,
  FETCH_HALLSEARCH_FAILURE,
  SET_SELECTED_DEALER,
  SET_SELECTED_PRICE,
  SET_SELECTED_EMAIL,
} from './Hall.types';

const initialSate = {
  loading: false,
  hallSearch: [],
  err: '',
};

const hallSearchReducer = (state = initialSate, action) => {
  switch (action.type) {
    case FETCH_HALLSEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HALLSEARCH_SUCCESS:
      return {
        loading: false,
        hallSearch: action.payload,
        err: '',
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
        setSelectedEmail: action.payload,
      };
    case FETCH_HALLSEARCH_FAILURE:
      return {
        loading: false,
        hallSearch: [],
        err: action.payload,
      };

    default:
      return state;
  }
};
export default hallSearchReducer;
