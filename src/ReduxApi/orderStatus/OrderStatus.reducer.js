import {
  FETCH_GIVEORDERSTATUS_REQUEST,
  FETCH_GIVEORDERSTATUS_SUCCESS,
  FETCH_GIVEORDERSTATUS_FAILURE,
  FETCH_VIEWORDERSTATUS_REQUEST,
  FETCH_VIEWORDERSTATUS_SUCCESS,
  FETCH_VIEWORDERSTATUS_FAILURE,
} from './OrderStatus.type';

const initialState = {
  loading: false,
  err: '',
  giveOrderStatus: [],
  viewOrderStatus: [],
};
const orderStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GIVEORDERSTATUS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GIVEORDERSTATUS_SUCCESS:
      return {
        loading: false,
        giveOrderStatus: action.payload,
        err: '',
      };
    case FETCH_GIVEORDERSTATUS_FAILURE:
      return {
        loading: false,
        err: action.payload,
        giveOrderStatus: [],
      };
    case FETCH_VIEWORDERSTATUS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VIEWORDERSTATUS_SUCCESS:
      return {
        loading: false,
        viewOrderStatus: action.payload,
        err: '',
      };
    case FETCH_VIEWORDERSTATUS_FAILURE:
      return {
        loading: false,
        err: action.payload,
        viewOrderStatus: [],
      };
    default:
      return state;
  }
};
export default orderStatusReducer;
