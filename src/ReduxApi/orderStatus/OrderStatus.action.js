/* eslint-disable no-alert */
/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_GIVEORDERSTATUS_REQUEST,
  FETCH_GIVEORDERSTATUS_SUCCESS,
  FETCH_GIVEORDERSTATUS_FAILURE,
  FETCH_VIEWORDERSTATUS_REQUEST,
  FETCH_VIEWORDERSTATUS_SUCCESS,
  FETCH_VIEWORDERSTATUS_FAILURE,
} from './OrderStatus.type';

export const fetchOrderStatusRequest = () => ({
  type: FETCH_GIVEORDERSTATUS_REQUEST,
});
export const fetchOrderStatussuccess = (giveOrderStatus) => ({
  type: FETCH_GIVEORDERSTATUS_SUCCESS,
  payload: giveOrderStatus,
});
export const fetchOrderStatusfailure = (err) => ({
  type: FETCH_GIVEORDERSTATUS_FAILURE,
  payload: err,
});
export const fetchViewOrderStatusRequest = () => ({
  type: FETCH_VIEWORDERSTATUS_REQUEST,
});
export const fetchViewOrderStatussuccess = (viewOrderStatus) => ({
  type: FETCH_VIEWORDERSTATUS_SUCCESS,
  payload: viewOrderStatus,
});
export const fetchViewOrderStatusfailure = (err) => ({
  type: FETCH_VIEWORDERSTATUS_FAILURE,
  payload: err,
});
export const fetchOrderStatus = (data) => (dispatch) => {
  dispatch(fetchOrderStatusRequest());
  axios
    .post('http://localhost:2000/api/orderstatus/view-order-Status', data)
    .then((res) => {
      const giveOrderStatus = res.data;
      console.log(giveOrderStatus, 'hiii');
      alert('status assign successfully');
      dispatch(fetchOrderStatussuccess(giveOrderStatus));
    })
    .catch((error) => {
      dispatch(fetchOrderStatusfailure(error.message));
    });
};

export const fetchViewOrderStatus = (data) => (dispatch) => {
  // const id = localStorage.getItem('id');
  dispatch(fetchViewOrderStatusRequest());
  axios
    .get('http://localhost:2000/api/orderstatus/get-order-status', data)
    .then((res) => {
      const viewOrderStatus = res.data.dataL;
      console.log(viewOrderStatus, 'hiii');
      dispatch(fetchViewOrderStatussuccess(viewOrderStatus));
    })
    .catch((error) => {
      dispatch(fetchViewOrderStatusfailure(error.message));
    });
};
