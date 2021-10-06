/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_VIEWSALOON_REQUEST,
  FETCH_VIEWSALOON_SUCCESS,
  FETCH_VIEWSALOON_FAILURE,
} from './Saloonbooking.types';

export const fetchViewSaloonrequest = () => ({
  type: FETCH_VIEWSALOON_REQUEST,
});
export const fetchViewSaloonSuccess = (viewSaloonorder) => ({
  type: FETCH_VIEWSALOON_SUCCESS,
  payload: viewSaloonorder,
});
export const fetchViewSaloonFailure = (err) => ({
  type: FETCH_VIEWSALOON_FAILURE,
  payload: err,
});

export const fetchViewSallonOrder = () => (dispatch) => {
  dispatch(fetchViewSaloonrequest());
  const email = localStorage.getItem('email');
  axios
    .get(
      `http://localhost:2000/api/saloonBooking/get-Saloonservices?email=${email}`
    )
    .then((res) => {
      const viewSaloonorder = res.data;
      console.log(res.data);
      dispatch(fetchViewSaloonSuccess(viewSaloonorder));
    })
    .catch((err) => {
      dispatch(fetchViewSaloonFailure(err.message));
    });
};
