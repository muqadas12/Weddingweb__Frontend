import {
  FETCH_PHOTOGRAPHY_REQUEST,
  FETCH_PHOTOGRAPHY_SUCCESS,
  FETCH_PHOTOGRAPHY_FAILURE,
  SET_SELECTED_DEALER,
} from './PhotographyTypes';

const initialState = {
  loading: false,
  photos: [],
  error: '',
  selectedDealer: {},
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOGRAPHY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PHOTOGRAPHY_SUCCESS:
      return {
        loading: false,
        photos: action.payload,
        error: '',
      };
    case FETCH_PHOTOGRAPHY_FAILURE:
      return {
        loading: false,
        photos: [],
        error: action.payload,
      };
    case SET_SELECTED_DEALER:
      return {
        ...state,
        selectedDealer: action.payload.dealer,
      };
    default:
      return state;
  }
};

export default photoReducer;
