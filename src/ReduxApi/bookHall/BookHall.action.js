/* eslint-disable no-alert */
/* eslint-disable no-console */
import axios from 'axios';
import { message } from 'antd';
import {
  FETCH_BOOKINGHALL_REQUEST,
  FETCH_BOOKINGHALL_SUCCESS,
  FETCH_BOOKINGHALL_FAILURE,
} from './BookHall.types';

export const fetchHallrequest = () => ({
  type: FETCH_BOOKINGHALL_REQUEST,
});
export const fetchhallSuccess = (hallBooking) => ({
  type: FETCH_BOOKINGHALL_SUCCESS,
  payload: hallBooking,
});
export const fetchhallFailure = (err) => ({
  type: FETCH_BOOKINGHALL_FAILURE,
  payload: err,
});

export const fetchbookingHallServices = (payload) => (dispatch) => {
  dispatch(fetchHallrequest());
  axios
    .post(
      'https://wedding-web-app.herokuapp.com/api/bookedhall/booking-hall',
      payload
    )
    .then((res) => {
      const hallBooking = res.data;
      console.log(hallBooking, 'hiii');
      message.success('hall booked successfully');
      dispatch(fetchhallSuccess(hallBooking));
    })
    .catch((error) => {
      dispatch(fetchhallFailure(error.message));
    });
};
