import axios from 'axios';

import {
  FETCH_CARRENT_REQUEST,
  FETCH_CARRENT_SUCCESS,
  FETCH_CARRENT_FAILURE,
} from './CarTypes';

export const fetchCarrequest = () => ({
  type: FETCH_CARRENT_REQUEST,
});
export const fetchCarsuccess = (carrent) => ({
  type: FETCH_CARRENT_SUCCESS,
  payload: carrent,
});
export const fetchCarFailure = (err) => ({
  type: FETCH_CARRENT_FAILURE,
  payload: err,
});
export const fetchCarRental = () => (dispatch) => {
  dispatch(fetchCarrequest());
  axios
    .get('http://localhost:2000/api/cars/get-cars')
    .then((res) => {
      const carrent = res.data.dataCar;
      dispatch(fetchCarsuccess(carrent));
    })
    .catch((err) => {
      dispatch(fetchCarFailure(err.msg));
    });
};
