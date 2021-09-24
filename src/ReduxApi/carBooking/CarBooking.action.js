import axios from 'axios';
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
    .post('http://localhost:2000/api/carBooking//carRental', payload)
    .then((res) => {
      const bookCar = res.data;
      alert('Photographer booked successfully');
      dispatch(fetchBookCarSucces(bookCar));
    })
    .catch((error) => {
      dispatch(fetchBookCarFailure(error.message));
    });
};
