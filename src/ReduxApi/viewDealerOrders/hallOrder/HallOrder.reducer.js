import {
  FETCH_HALLORDER_REQUEST,
  FETCH_HALLORDER_SUCCESS,
  FETCH_HALLORDER_FAILURE,
} from './HallOrder.type';

const initialState = {
  loading: false,
  dealerHallOrders: [],
  error: '',
};

const ordersHallDealerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HALLORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HALLORDER_SUCCESS:
      return {
        dealerHallOrders: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_HALLORDER_FAILURE:
      return {
        loading: false,
        dealerHallOrders: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default ordersHallDealerReducer;
