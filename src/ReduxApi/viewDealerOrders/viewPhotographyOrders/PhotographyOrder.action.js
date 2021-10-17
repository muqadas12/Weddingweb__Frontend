/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_PHOTOGRAPHYORDER_REQUEST,
  FETCH_PHOTOGRAPHYORDER_SUCCESS,
  FETCH_PHOTOGRAPHYORDER_FAILURE,
  SET_SELECTED_PRICE,
  SET_SELECTED_DEALER,
} from './PhotographyOrder.types';

export const photographyOrderRequest = () => ({
  type: FETCH_PHOTOGRAPHYORDER_REQUEST,
});
export const photographyOrderSucces = (photographyOrders) => ({
  type: FETCH_PHOTOGRAPHYORDER_SUCCESS,
  payload: photographyOrders,
});

export const photographyOrderFailure = (error) => ({
  type: FETCH_PHOTOGRAPHYORDER_FAILURE,
  payload: error,
});

export const setSelectedPrice = (price) => ({
  type: SET_SELECTED_PRICE,
  payload: price,
});

export const setSelectedDealer = (dealer) => ({
  type: SET_SELECTED_DEALER,
  payload: dealer,
});
export const fetchOrdersPhotography = () => (dispatch) => {
  const email = localStorage.getItem('email');
  console.log(email, 'immm photo email');
  dispatch(photographyOrderRequest());
  axios
    .get(
      `https://wedding-web-app.herokuapp.com/api/bookingPhoto/get-photography-orders?email=${email}`
    )
    .then((res) => {
      const photographyOrders = res.data.data;
      console.log(email, 'immm photo email');

      // console.log(photographyOrders);
      dispatch(photographyOrderSucces(photographyOrders));
    })
    .catch((error) => {
      dispatch(photographyOrderFailure(error.message));
    });
};
export const fetchDealerOrdersPhotography = () => (dispatch) => {
  const email = localStorage.getItem('email');
  console.log(email);

  dispatch(photographyOrderRequest());
  axios
    .get(
      `https://wedding-web-app.herokuapp.com/api/bookingPhoto/get-photography-orders-dealers?email=${email}`
    )
    .then((res) => {
      const photographyOrders = res.data.data;
      console.log(photographyOrders);
      dispatch(photographyOrderSucces(photographyOrders));
    })
    .catch((error) => {
      dispatch(photographyOrderFailure(error.message));
    });
};
