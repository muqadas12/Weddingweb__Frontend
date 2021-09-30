import {
  FETCH_DELDEALERS_SUCCESS,
  FETCH_DELDEALERS_REQUEST,
  FETCH_DELDEALERS_FAILURE,
} from './Deltype';

const initialState = {
  loading: false,
  delDealers: [],
  error: '',
};

const delAllDealersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DELDEALERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DELDEALERS_SUCCESS:
      return {
        loading: false,
        delDealers: state.delDealers.filter(
          (user) => user.id !== action.payload.id
        ),
        error: '',
      };
    case FETCH_DELDEALERS_FAILURE:
      return {
        loading: false,
        delDealers: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default delAllDealersReducer;
