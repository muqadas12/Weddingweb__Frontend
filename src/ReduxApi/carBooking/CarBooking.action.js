/* eslint-disable no-alert */
import axios from 'axios';
import { message } from 'antd';
import {
  FETCH_BOOKCAR_REQUEST,
  FETCH_BOOKCAR_SUCCESS,
  FETCH_BOOKCAR_FAILURE,
} from './CarBooking.types';

export const fetchBookCarRequest = () => ({
  type: FETCH_BOOKCAR_REQUEST,
});
export const fetchBookCarSucces = (bookCar) => ({
  type: FETCH_BOOKCAR_SUCCESS,
  payload: bookCar,
});

export const fetchBookCarFailure = (error) => ({
  type: FETCH_BOOKCAR_FAILURE,
  payload: error,
});
export const fetchbookCar = (payload) => (dispatch) => {
  dispatch(fetchBookCarRequest());
  axios
    .post(
      'https://wedding-web-app.herokuapp.com/api/carBooking/carRental',
      payload
    )
    .then((res) => {
      const bookCar = res.data;
      message.success('Car booked successfully');
      dispatch(fetchBookCarSucces(bookCar));
    })
    .catch((error) => {
      dispatch(fetchBookCarFailure(error.message));
    });
};
