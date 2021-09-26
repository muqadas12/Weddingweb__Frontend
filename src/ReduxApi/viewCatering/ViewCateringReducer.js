import {
  FETCH_VIEWCATERING_REQUEST,
  FETCH_VIEWCATERING_SUCCESS,
  FETCH_VIEWCATERING_FAILURE,
} from './ViewCateringTypes';

const initialState = {
  loading: false,
  viewCatering: [],
  err: '',
};

const viewCateringReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
export default viewCateringReducer;
