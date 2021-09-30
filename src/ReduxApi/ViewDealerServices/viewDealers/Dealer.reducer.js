import {
  FETCH_DEALERS_SUCCESS,
  FETCH_DEALERS_REQUEST,
  FETCH_DEALERS_FAILURE,
} from './Dealer.types';

const initialState = {
  loading: false,
  viewDealers: [],
  error: '',
};

const viewAllDealersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEALERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DEALERS_SUCCESS:
      return {
        viewDealers: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_DEALERS_FAILURE:
      return {
        loading: false,
        viewDealers: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default viewAllDealersReducer;
