import {
  FETCH_VIEWCARORDERSBOOKING_REQUEST,
  FETCH_VIEWCARORDERSBOOKING_SUCCESS,
  FETCH_VIEWCARORDERSBOOKING_FAILURE,
} from './CarBookingorder.type';

const initialState = {
  loading: false,
  viewCarBook: [],
  err: '',
};

const viewCarBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIEWCARORDERSBOOKING_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_VIEWCARORDERSBOOKING_SUCCESS:
      return {
        loading: false,
        viewCarBook: action.payload,
        err: '',
      };
    case FETCH_VIEWCARORDERSBOOKING_FAILURE:
      return {
        loading: false,
        viewCarBook: [],
        err: action.payload,
      };

    default:
      return state;
  }
};
export default viewCarBookingReducer;
