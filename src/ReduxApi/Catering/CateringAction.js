/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_CATERING_REQUEST,
  FETCH_CATERING_SUCCESS,
  FETCH_CATERING_FAILURE,
} from './CateringTypes';

export const fetchcateringrequest = () => ({
  type: FETCH_CATERING_REQUEST,
});
export const fetchcateringSuccess = (cateringser) => ({
  type: FETCH_CATERING_SUCCESS,
  payload: cateringser,
});
export const fetchCateringFailure = (err) => ({
  type: FETCH_CATERING_FAILURE,
  payload: err,
});
export const fetchCatering = () => (dispatch) => {
  dispatch(fetchcateringrequest());

  axios
    .get('http://localhost:2000/api/catering/get-catering')
    .then((res) => {
      const cateringser = res.data;
      dispatch(fetchcateringSuccess(cateringser));
    })
    .catch((err) => {
      dispatch(fetchCateringFailure(err.message));
    });
};
