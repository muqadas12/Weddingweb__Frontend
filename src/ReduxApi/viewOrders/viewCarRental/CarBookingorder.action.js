/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_VIEWCARORDERSBOOKING_REQUEST,
  FETCH_VIEWCARORDERSBOOKING_SUCCESS,
  FETCH_VIEWCARORDERSBOOKING_FAILURE,
} from './CarBookingorder.type';

export const fetchViewCarBookingrequest = () => ({
  type: FETCH_VIEWCARORDERSBOOKING_REQUEST,
});
export const fetchViewCarBookingSuccess = (viewCarBook) => ({
  type: FETCH_VIEWCARORDERSBOOKING_SUCCESS,
  payload: viewCarBook,
});
export const fetchViewCarBookingFailure = (err) => ({
  type: FETCH_VIEWCARORDERSBOOKING_FAILURE,
  payload: err,
});

export const fetchViewCarBooking = () => (dispatch) => {
  dispatch(fetchViewCarBookingrequest());
  const email = localStorage.getItem('email');
  axios
    .get(
      `https://wedding-web-app.herokuapp.com/api/carBooking/view-car-rental-orders?email=${email}`
    )
    .then((res) => {
      const viewCarBook = res.data.data;
      console.log(res.data);
      dispatch(fetchViewCarBookingSuccess(viewCarBook));
    })
    .catch((err) => {
      dispatch(fetchViewCarBookingFailure(err.message));
    });
};
