import {
  FETCH_CATERING_REQUEST,
  FETCH_CATERING_SUCCESS,
  FETCH_CATERING_FAILURE,
  FETCH_VIEWCATERING_REQUEST,
  FETCH_VIEWCATERING_SUCCESS,
  FETCH_VIEWCATERING_FAILURE,
  SET_SELECTED_EMAIL,
  SET_SELECTED_DEALER,
  SET_SELECTED_PRICE,
} from './CateringTypes';

const initialState = {
  loading: false,
  cateringser: [],
  viewCatering: [],
  selectedEmail: {},
  selectedDealer: {},
  setSelectedPrice: {},
  err: '',
};

const cateringReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATERING_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CATERING_SUCCESS:
      return {
        loading: false,
        cateringser: action.payload,
        err: '',
      };
    case FETCH_CATERING_FAILURE:
      return {
        loading: false,
        cateringser: [],
        err: action.payload,
      };
    case FETCH_VIEWCATERING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VIEWCATERING_SUCCESS:
      return {
        loading: false,
        viewCatering: action.payload,
        err: '',
      };
    case FETCH_VIEWCATERING_FAILURE:
      return {
        loading: false,
        viewCatering: [],
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
export default cateringReducer;
