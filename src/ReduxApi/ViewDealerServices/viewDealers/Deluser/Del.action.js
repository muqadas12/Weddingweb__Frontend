/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_DELDEALERS_SUCCESS,
  FETCH_DELDEALERS_REQUEST,
  FETCH_DELDEALERS_FAILURE,
} from './Deltype';

export const fetchDeleteDealersRequest = () => ({
  type: FETCH_DELDEALERS_REQUEST,
});
export const fetchDeleteDealersSucces = (delDealers) => ({
  type: FETCH_DELDEALERS_SUCCESS,
  payload: delDealers,
});

export const fetchDeleteDealersFailure = (error) => ({
  type: FETCH_DELDEALERS_FAILURE,
  payload: error,
});
export const fetchdelDealers = (_id) => (dispatch) => {
  dispatch(fetchDeleteDealersRequest());
  axios
    .delete(
      `https://wedding-web-app.herokuapp.com/api/del-dealers-services/delete/${_id}`
    )
    .then((res) => {
      const delDealers = res.data;
      console.log(delDealers);
      dispatch(fetchDeleteDealersSucces(res.data));
    })
    .catch((error) => {
      dispatch(fetchDeleteDealersFailure(error.message));
    });
};
