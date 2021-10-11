/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_VIEWCATERING_REQUEST,
  FETCH_VIEWCATERING_SUCCESS,
  FETCH_VIEWCATERING_FAILURE,
} from './ViewCateringTypes';

export const fetchViewcateringrequest = () => ({
  type: FETCH_VIEWCATERING_REQUEST,
});
export const fetchViewcateringSuccess = (viewCatering) => ({
  type: FETCH_VIEWCATERING_SUCCESS,
  payload: viewCatering,
});
export const fetchViewCateringFailure = (err) => ({
  type: FETCH_VIEWCATERING_FAILURE,
  payload: err,
});

export const fetchViewCatering = () => (dispatch) => {
  dispatch(fetchViewcateringrequest());
  const email = localStorage.getItem('email');
  axios
    .get(
      `http://localhost:2000/api/servicescatering/get-catering-customer?email=${email}`
    )
    .then((res) => {
      const viewCatering = res.data.data;
      console.log(res.data);
      dispatch(fetchViewcateringSuccess(viewCatering));
    })
    .catch((err) => {
      dispatch(fetchViewCateringFailure(err.message));
    });
};
