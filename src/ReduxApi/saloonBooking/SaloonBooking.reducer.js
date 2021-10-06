import {
  FETCH_BOOKSALOON_SUCCESS,
  FETCH_BOOKSALOON_REQUEST,
  FETCH_BOOKSALOON_FAILURE,
  SET_SELECTED_EMAIL,
} from './SaloonBooking.types';

const initialState = {
  loading: false,
  bookSaloon: [],
  selectedEmail: {},
  error: '',
};

const bookSaloonservicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKSALOON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKSALOON_SUCCESS:
      return {
        bookSaloon: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_BOOKSALOON_FAILURE:
      return {
        loading: false,
        bookSaloon: [],
        error: action.payload,
      };
    case SET_SELECTED_EMAIL:
      return {
        ...state,
        selectedEmail: [],
      };

    default:
      return state;
  }
};
export default bookSaloonservicesReducer;
