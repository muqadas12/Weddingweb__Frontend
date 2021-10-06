import {
  FETCH_CARORDER_REQUEST,
  FETCH_CARORDER_SUCCESS,
  FETCH_CARORDER_FAILURE,
} from './CarRentalOrders.type';

const initialState = {
  loading: false,
  carOrdersDealer: [],
  error: '',
};

const carOrdersDealerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CARORDER_SUCCESS:
      return {
        carOrdersDealer: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_CARORDER_FAILURE:
      return {
        loading: false,
        carOrdersDealer: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default carOrdersDealerReducer;
