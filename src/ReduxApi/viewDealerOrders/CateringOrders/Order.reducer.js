import {
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
} from './Orders.type';

const initialState = {
  loading: false,
  orders: [],
  error: '',
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ORDER_SUCCESS:
      return {
        orders: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_ORDER_FAILURE:
      return {
        loading: false,
        orders: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default ordersReducer;
