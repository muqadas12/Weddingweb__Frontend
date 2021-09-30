import {
  FETCH_HALLSEARCH_REQUEST,
  FETCH_HALLSEARCH_SUCCESS,
  FETCH_HALLSEARCH_FAILURE,
} from './Hall.types';

const initialSate = {
  loading: false,
  hallSearch: [],
  err: '',
};

const hallSearchReducer = (state = initialSate, action) => {
  switch (action.type) {
    case FETCH_HALLSEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HALLSEARCH_SUCCESS:
      return {
        loading: false,
        hallSearch: action.payload,
        err: '',
      };
    case FETCH_HALLSEARCH_FAILURE:
      return {
        loading: false,
        hallSearch: [],
        err: action.payload,
      };

    default:
      return state;
  }
};
export default hallSearchReducer;
