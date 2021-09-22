import {
  FETCH_SALOON_SERVICE_REQUEST,
  FETCH_SALOON_SERVICE_SUCCESS,
  FETCH_SALOON_SERVICE_FAILURE,
} from "./SaloonTypes";
const initialSate = {
  loading: false,
  saloonser: [],
  err: "",
};

const saloonReducer = (state = initialSate, action) => {
  switch (action.type) {
    case FETCH_SALOON_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SALOON_SERVICE_SUCCESS:
      return {
        loading: false,
        saloonser: action.payload,
        err: "",
      };
    case FETCH_SALOON_SERVICE_FAILURE:
      return {
        loading: false,
        saloonser: [],
        err: action.payload,
      };

    default:
      return state;
  }
};
export default saloonReducer;
