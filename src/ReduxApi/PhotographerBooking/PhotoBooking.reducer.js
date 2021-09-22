import {
  FETCH_BOOKPHOTOGRAPHY_SUCCESS,
  FETCH_BOOKPHOTOGRAPHY_REQUEST,
  FETCH_BOOKPHOTOGRAPHY_FAILURE,
} from "./PhotoBooking.types";
const initialState = {
  loading: false,
  bookPhotographer: [],
  error: "",
};

const bookPhotoservicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKPHOTOGRAPHY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKPHOTOGRAPHY_SUCCESS:
      return {
        bookPhotographer: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_BOOKPHOTOGRAPHY_FAILURE:
      return {
        loading: false,
        bookPhotographer: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default bookPhotoservicesReducer;
