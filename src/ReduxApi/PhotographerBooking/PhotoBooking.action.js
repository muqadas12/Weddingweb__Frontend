/* eslint-disable no-alert */
/* eslint-disable no-console */
import axios from 'axios';
import { message } from 'antd';

import {
  FETCH_BOOKPHOTOGRAPHY_REQUEST,
  FETCH_BOOKPHOTOGRAPHY_SUCCESS,
  FETCH_BOOKPHOTOGRAPHY_FAILURE,
} from './PhotoBooking.types';

export const fetchBookPhotographerRequest = () => ({
  type: FETCH_BOOKPHOTOGRAPHY_REQUEST,
});
export const fetchBookPhotographerSucces = (bookPhotographer) => ({
  type: FETCH_BOOKPHOTOGRAPHY_SUCCESS,
  payload: bookPhotographer,
});

export const fetchBookPhotographerFailure = (error) => ({
  type: FETCH_BOOKPHOTOGRAPHY_FAILURE,
  payload: error,
});

export const fetchPhoto = (data) => (dispatch) => {
  dispatch(fetchBookPhotographerRequest());
  axios
    .post(
      'https://wedding-web-app.herokuapp.com/api/bookingPhoto/booking',
      data
    )
    .then((res) => {
      const bookPhotographer = res.data;
      message.success('Photographer booked successfully');
      dispatch(fetchBookPhotographerSucces(bookPhotographer));
    })
    .catch((error) => {
      dispatch(fetchBookPhotographerFailure(error.message));
    });
};
