import {
  FETCH_PHOTOGRAPHYORDER_REQUEST,
  FETCH_PHOTOGRAPHYORDER_SUCCESS,
  FETCH_PHOTOGRAPHYORDER_FAILURE,
  SET_SELECTED_PRICE,
  SET_SELECTED_DEALER,
} from './PhotographyOrder.types';

const initialState = {
  loading: false,
  photographyOrders: [],
  selectedPrice: {},
  selectedDealer: {},
  error: '',
};

const ordersPhotographyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOGRAPHYORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PHOTOGRAPHYORDER_SUCCESS:
      return {
        photographyOrders: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_PHOTOGRAPHYORDER_FAILURE:
      return {
        loading: false,
        photographyOrders: [],
        error: action.payload,
      };
    case SET_SELECTED_PRICE:
      return {
        ...state,
        selectedPrice: action.payload,
      };
    case SET_SELECTED_DEALER:
      return {
        ...state,
        selectedDealer: action.payload,
      };

    default:
      return state;
  }
};
export default ordersPhotographyReducer;
