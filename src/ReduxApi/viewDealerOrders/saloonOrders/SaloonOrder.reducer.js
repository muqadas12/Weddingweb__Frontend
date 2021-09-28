import {
  FETCH_SALOONORDER_REQUEST,
  FETCH_SALOONORDER_SUCCESS,
  FETCH_SALOONORDER_FAILURE,
} from './SaloonOrder.types';

const initialState = {
  loading: false,
  dealerSaloonOrders: [],
  error: '',
};

const ordersSaloonDealerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SALOONORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SALOONORDER_SUCCESS:
      return {
        dealerSaloonOrders: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_SALOONORDER_FAILURE:
      return {
        loading: false,
        dealerSaloonOrders: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default ordersSaloonDealerReducer;
