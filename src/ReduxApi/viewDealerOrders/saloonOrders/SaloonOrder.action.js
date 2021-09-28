import axios from 'axios';
import {
  FETCH_SALOONORDER_REQUEST,
  FETCH_SALOONORDER_SUCCESS,
  FETCH_SALOONORDER_FAILURE,
} from './SaloonOrder.types';

export const fetchOrdersaloonServiceRequest = () => ({
  type: FETCH_SALOONORDER_REQUEST,
});
export const fetchOrdersaloonServiceSucces = (dealerSaloonOrders) => ({
  type: FETCH_SALOONORDER_SUCCESS,
  payload: dealerSaloonOrders,
});

export const fetchOrdersaloonServiceFailure = (error) => ({
  type: FETCH_SALOONORDER_FAILURE,
  payload: error,
});
export const fetchOrdersSaloon = () => (dispatch) => {
  dispatch(fetchOrdersaloonServiceRequest());
  axios
    .get('http://localhost:2000/api/saloonBooking/get-saloon-services')
    .then((res) => {
      const dealerSaloonOrders = res.data;
      console.log(dealerSaloonOrders);
      dispatch(fetchOrdersaloonServiceSucces(dealerSaloonOrders));
    })
    .catch((error) => {
      dispatch(fetchOrdersaloonServiceFailure(error.message));
    });
};
