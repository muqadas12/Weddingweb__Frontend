/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_DEALERS_SUCCESS,
  FETCH_DEALERS_REQUEST,
  FETCH_DEALERS_FAILURE,
} from './Dealer.types';

export const fetchallDealersRequest = () => ({
  type: FETCH_DEALERS_REQUEST,
});
export const fetchallDealersSucces = (viewDealers) => ({
  type: FETCH_DEALERS_SUCCESS,
  payload: viewDealers,
});

export const fetchallDealersFailure = (error) => ({
  type: FETCH_DEALERS_FAILURE,
  payload: error,
});
export const fetchAllDealers = () => (dispatch) => {
  dispatch(fetchallDealersRequest());
  axios
    .get(
      'https://wedding-web-app.herokuapp.com/api/getAlldealer/get-all-dealer-services'
    )
    .then((res) => {
      const viewDealers = res.data;
      console.log(viewDealers);
      dispatch(fetchallDealersSucces(res.data));
    })
    .catch((error) => {
      dispatch(fetchallDealersFailure(error.message));
    });
};
