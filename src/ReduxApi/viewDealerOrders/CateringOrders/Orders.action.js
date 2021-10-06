/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
} from './Orders.type';

export const fetchOrderRequest = () => ({
  type: FETCH_ORDER_REQUEST,
});
export const fetchOrderSucces = (orders) => ({
  type: FETCH_ORDER_SUCCESS,
  payload: orders,
});

export const fetchOrderFailure = (error) => ({
  type: FETCH_ORDER_FAILURE,
  payload: error,
});
export const fetchOrders = () => (dispatch) => {
  const email = localStorage.getItem('email');
  dispatch(fetchOrderRequest());
  axios
    .get(
      `http://localhost:2000/api/servicescatering/get-catering?email=${email}`
    )
    .then((res) => {
      const orders = res.data.data;
      console.log(orders);
      // console.log(services.map((dealer)=>dealer.dealerservice),'hiii')
      dispatch(fetchOrderSucces(orders));
    })
    .catch((error) => {
      dispatch(fetchOrderFailure(error.message));
    });
};
