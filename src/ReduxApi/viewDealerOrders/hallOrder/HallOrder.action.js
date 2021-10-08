/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_HALLORDER_REQUEST,
  FETCH_HALLORDER_SUCCESS,
  FETCH_HALLORDER_FAILURE,
} from './HallOrder.type';

export const fetchOrderhallServiceRequest = () => ({
  type: FETCH_HALLORDER_REQUEST,
});
export const fetchOrderhallServiceSucces = (dealerHallOrders) => ({
  type: FETCH_HALLORDER_SUCCESS,
  payload: dealerHallOrders,
});

export const fetchOrderhallServiceFailure = (error) => ({
  type: FETCH_HALLORDER_FAILURE,
  payload: error,
});
export const fetchOrdersHall = () => (dispatch) => {
  const email = localStorage.getItem('email');
  dispatch(fetchOrderhallServiceRequest());
  axios
    .get(
      `http://localhost:2000/api/bookedhall/get-booking-hall-customer-order?email=${email}`
    )
    .then((res) => {
      const dealerHallOrders = res.data.data;
      console.log(dealerHallOrders);
      dispatch(fetchOrderhallServiceSucces(dealerHallOrders));
    })
    .catch((error) => {
      dispatch(fetchOrderhallServiceFailure(error.message));
    });
};
export const fetchOrdersDealerHall = () => (dispatch) => {
  const email = localStorage.getItem('email');
  dispatch(fetchOrderhallServiceRequest());
  axios
    .get(
      `http://localhost:2000/api/bookedhall//get-hall-orders-dealers?email=${email}`
    )
    .then((res) => {
      const dealerHallOrders = res.data.data;
      console.log(dealerHallOrders);
      dispatch(fetchOrderhallServiceSucces(dealerHallOrders));
    })
    .catch((error) => {
      dispatch(fetchOrderhallServiceFailure(error.message));
    });
};
