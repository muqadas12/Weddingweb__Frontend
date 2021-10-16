/* eslint-disable no-alert */
/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_BOOKSALOON_REQUEST,
  FETCH_BOOKSALOON_SUCCESS,
  FETCH_BOOKSALOON_FAILURE,
  SET_SELECTED_EMAIL,
} from './SaloonBooking.types';

export const fetchBookSaloonRequest = () => ({
  type: FETCH_BOOKSALOON_REQUEST,
});
export const fetchBookSaloonSucces = (bookSaloon) => ({
  type: FETCH_BOOKSALOON_SUCCESS,
  payload: bookSaloon,
});

export const fetchBookSaloonFailure = (error) => ({
  type: FETCH_BOOKSALOON_FAILURE,
  payload: error,
});
export const setSelectedEmail = (email) => ({
  type: SET_SELECTED_EMAIL,
  payload: email,
});
export const fetchSaloon = (payload) => (dispatch) => {
  dispatch(fetchBookSaloonRequest());
  axios
    .post(
      'https://wedding-web-app.herokuapp.com/api/saloonBooking/saloon',
      payload
    )
    .then((res) => {
      const bookSaloon = res.data;
      console.log(bookSaloon, 'hiii');
      alert('Saloon booked successfully');
      dispatch(fetchBookSaloonSucces(bookSaloon));
    })
    .catch((error) => {
      dispatch(fetchBookSaloonFailure(error.message));
    });
};
