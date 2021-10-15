/* eslint-disable no-use-before-define */
import axios from 'axios';
import {
  FETCH_HALLSEARCH_REQUEST,
  FETCH_HALLSEARCH_SUCCESS,
  FETCH_HALLSEARCH_FAILURE,
  SET_SELECTED_DEALER,
  SET_SELECTED_PRICE,
  SET_SELECTED_EMAIL,
} from './Hall.types';

export const fetchHallSerach = () => (dispatch) => {
  dispatch(fetchHallSerachRequest());
  axios
    .get('http://localhost:2000/api/gethall/get-hall-ser')

    .then((res) => {
      const hallSearch = res.data;
      dispatch(fetchHallSerachSuccess(hallSearch));
    })
    .catch((err) => {
      dispatch(fetchHallSerachFailure(err.msg));
    });
};

export const fetchHallSerachRequest = () => ({
  type: FETCH_HALLSEARCH_REQUEST,
});
export const fetchHallSerachSuccess = (hallSearch) => ({
  type: FETCH_HALLSEARCH_SUCCESS,
  payload: hallSearch,
});

export const fetchHallSerachFailure = (err) => ({
  type: FETCH_HALLSEARCH_FAILURE,
  payload: err,
});
export const setSelectedDealer = (dealer) => ({
  type: SET_SELECTED_DEALER,
  payload: dealer,
});
export const setSelectedEmail = (email) => ({
  type: SET_SELECTED_EMAIL,
  payload: email,
});
export const setSelectedPrice = (price) => ({
  type: SET_SELECTED_PRICE,
  payload: price,
});
