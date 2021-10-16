import axios from 'axios';
import {
  FETCH_DEALER_REQUEST,
  FETCH_DEALER_SUCCESS,
  FETCH_DEALER_FAILURE,
} from './Dealer.types';

export const fetchDealerRequest = () => ({
  type: FETCH_DEALER_REQUEST,
});
export const fetchDealerSucces = (dealers) => ({
  type: FETCH_DEALER_SUCCESS,
  payload: dealers,
});

export const fetchDealerFailure = (error) => ({
  type: FETCH_DEALER_FAILURE,
  payload: error,
});
export const fetchDealers = () => (dispatch) => {
  dispatch(fetchDealerRequest());
  axios
    .get('https://wedding-web-app.herokuapp.com/api/users/gettingDealers')
    .then((res) => {
      const dealers = res.data.dataL;
      dispatch(fetchDealerSucces(dealers));
    })
    .catch((error) => {
      dispatch(fetchDealerFailure(error.message));
    });
};
