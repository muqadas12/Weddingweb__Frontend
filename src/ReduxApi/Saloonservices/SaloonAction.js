/* eslint-disable no-use-before-define */
import axios from 'axios';
import {
  FETCH_SALOON_SERVICE_REQUEST,
  FETCH_SALOON_SERVICE_SUCCESS,
  FETCH_SALOON_SERVICE_FAILURE,
  SET_SELECTED_EMAIL,
  SET_SELECTED_DEALER,
  SET_SELECTED_PRICE,
} from './SaloonTypes';

export const fetchServices = () => (dispatch) => {
  dispatch(fetchsaloonServiceRequest());
  axios
    .get('https://wedding-web-app.herokuapp.com/api/saloon/get-saloon-services')
    .then((res) => {
      const saloonser = res.data.dataSaloon;
      dispatch(fetchsaloonServiceSuccess(saloonser));
    })
    .catch((err) => {
      dispatch(fetchsaloonServiceFailure(err.msg));
    });
};

export const fetchsaloonServiceRequest = () => ({
  type: FETCH_SALOON_SERVICE_REQUEST,
});
export const fetchsaloonServiceSuccess = (saloonser) => ({
  type: FETCH_SALOON_SERVICE_SUCCESS,
  payload: saloonser,
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
export const fetchsaloonServiceFailure = (err) => ({
  type: FETCH_SALOON_SERVICE_FAILURE,
  payload: err,
});
