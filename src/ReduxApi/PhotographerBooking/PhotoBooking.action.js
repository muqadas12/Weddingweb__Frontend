import axios from 'axios';
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
    .post('http://localhost:2000/api/bookingPhoto/booking', data)
    .then((res) => {
      const bookPhotographer = res.data;
      console.log(bookPhotographer, 'hiii');
      alert('Photographer booked successfully');
      dispatch(fetchBookPhotographerSucces(bookPhotographer));
    })
    .catch((error) => {
      dispatch(fetchBookPhotographerFailure(error.message));
    });
};
