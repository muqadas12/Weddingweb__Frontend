import {
  FETCH_CATERING_REQUEST,
  FETCH_CATERING_SUCCESS,
  FETCH_CATERING_FAILURE,
} from './CateringTypes';

const initialState = {
  loading: false,
  cateringser: [],
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

    default:
      return state;
  }
};
export default cateringReducer;
