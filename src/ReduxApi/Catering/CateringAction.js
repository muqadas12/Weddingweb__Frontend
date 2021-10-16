/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_CATERING_REQUEST,
  FETCH_CATERING_SUCCESS,
  FETCH_CATERING_FAILURE,
  SET_SELECTED_EMAIL,
  SET_SELECTED_DEALER,
  SET_SELECTED_PRICE,
} from './CateringTypes';

export const fetchcateringrequest = () => ({
  type: FETCH_CATERING_REQUEST,
});
export const fetchcateringSuccess = (cateringser) => ({
  type: FETCH_CATERING_SUCCESS,
  payload: cateringser,
});
export const fetchCateringFailure = (err) => ({
  type: FETCH_CATERING_FAILURE,
  payload: err,
});
export const setSelectedEmail = (email) => ({
  type: SET_SELECTED_EMAIL,
  payload: email,
});
export const setSelectedDealer = (dealer) => ({
  type: SET_SELECTED_DEALER,
  payload: dealer,
});
export const setSelectedPrice = (price) => ({
  type: SET_SELECTED_PRICE,
  payload: price,
});
export const fetchCatering = () => (dispatch) => {
  dispatch(fetchcateringrequest());

  axios
    .get('https://wedding-web-app.herokuapp.com/api/catering/get-catering')
    .then((res) => {
      const cateringser = res.data;
      dispatch(fetchcateringSuccess(cateringser));
    })
    .catch((err) => {
      dispatch(fetchCateringFailure(err.message));
    });
};
