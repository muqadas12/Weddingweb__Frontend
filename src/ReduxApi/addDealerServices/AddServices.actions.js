/* eslint-disable no-alert */
/* eslint-disable no-console */
import axios from 'axios';
import { message } from 'antd';
import {
  FETCH_ADDSERVICES_REQUEST,
  FETCH_ADDSERVICES_SUCCESS,
  FETCH_ADDSERVICES_FAILURE,
} from './AddServices.types';

export const fetchAddServicesRequest = () => ({
  type: FETCH_ADDSERVICES_REQUEST,
});
export const fetchAddServicesSucces = (addservices) => ({
  type: FETCH_ADDSERVICES_SUCCESS,
  payload: addservices,
});

export const fetchAddServicesFailure = (error) => ({
  type: FETCH_ADDSERVICES_FAILURE,
  payload: error,
});
export const fetchAddServices = (formData) => (dispatch) => {
  dispatch(fetchAddServicesRequest());
  axios
    .post(
      'https://wedding-web-app.herokuapp.com/api/postdealer/post-dealers',
      formData
    )
    .then((res) => {
      const addservices = res.data;
      console.log(addservices, 'hiii');
      message.success('service added successfully');
      dispatch(fetchAddServicesSucces(addservices));
    })
    .catch((error) => {
      dispatch(fetchAddServicesFailure(error.message));
    });
};
