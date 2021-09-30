import {
  FETCH_BOOKINGHALL_FAILURE,
  FETCH_BOOKINGHALL_REQUEST,
  FETCH_BOOKINGHALL_SUCCESS,
} from './BookHall.types';

const initialState = {
  loading: false,
  err: '',
  hallBooking: [],
};

const bookHallreducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKINGHALL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKINGHALL_SUCCESS:
      return {
        loading: false,
        hallBooking: action.payload,
        err: [],
      };
    case FETCH_BOOKINGHALL_FAILURE:
      return {
        loading: false,
        hallBooking: [],
        err: action.payload,
      };

    default:
      return state;
  }
};
export default bookHallreducer;
