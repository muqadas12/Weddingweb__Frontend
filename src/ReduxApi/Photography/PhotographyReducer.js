import {
  FETCH_PHOTOGRAPHY_REQUEST,
  FETCH_PHOTOGRAPHY_SUCCESS,
  FETCH_PHOTOGRAPHY_FAILURE,
} from "./PhotographyTypes";

const initialState = {
  loading: false,
  photos: [],
  error: "",
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
        error: "",
      };
    case FETCH_PHOTOGRAPHY_FAILURE:
      return {
        loading: false,
        photos: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default photoReducer;
