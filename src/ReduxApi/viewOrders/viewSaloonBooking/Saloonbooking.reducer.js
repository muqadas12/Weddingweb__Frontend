import {
  FETCH_VIEWSALOON_REQUEST,
  FETCH_VIEWSALOON_SUCCESS,
  FETCH_VIEWSALOON_FAILURE,
} from './Saloonbooking.types';

const initialState = {
  loading: false,
  viewSaloonorder: [],
  err: '',
};

const viewSaloonservicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIEWSALOON_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_VIEWSALOON_SUCCESS:
      return {
        loading: false,
        viewSaloonorder: action.payload,
        err: '',
      };
    case FETCH_VIEWSALOON_FAILURE:
      return {
        loading: false,
        viewSaloonorder: [],
        err: action.payload,
      };
    default:
      return state;
  }
};
export default viewSaloonservicesReducer;
