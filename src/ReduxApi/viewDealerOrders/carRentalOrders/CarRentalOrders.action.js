/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_CARORDER_REQUEST,
  FETCH_CARORDER_SUCCESS,
  FETCH_CARORDER_FAILURE,
} from './CarRentalOrders.type';

export const fetchCarOrderRequest = () => ({
  type: FETCH_CARORDER_REQUEST,
});
export const fetchCarOrderSucces = (carOrdersDealer) => ({
  type: FETCH_CARORDER_SUCCESS,
  payload: carOrdersDealer,
});

export const fetchCarOrderFailure = (error) => ({
  type: FETCH_CARORDER_FAILURE,
  payload: error,
});
export const fetchdealerCarOrders = () => (dispatch) => {
  const email = localStorage.getItem('email');
  dispatch(fetchCarOrderRequest());
  axios
    .get(
      `http://localhost:2000/api/carBooking/view-car-rental-dealer-orders?email=${email}`
    )
    .then((res) => {
      const carOrdersDealer = res.data.data;
      console.log(carOrdersDealer);
      // console.log(services.map((dealer)=>dealer.dealerservice),'hiii')
      dispatch(fetchCarOrderSucces(carOrdersDealer));
    })
    .catch((error) => {
      dispatch(fetchCarOrderFailure(error.message));
    });
};
