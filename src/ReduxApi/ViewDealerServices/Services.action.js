/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
} from './Service.types';

export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});
export const fetchServicesSucces = (services) => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: services,
});

export const fetchServicesFailure = (error) => ({
  type: FETCH_SERVICES_FAILURE,
  payload: error,
});
export const fetchServices = () => {
  const email = localStorage.getItem('email');
  return (dispatch) => {
    dispatch(fetchServicesRequest());
    axios
      .get(
        `https://wedding-web-app.herokuapp.com/api/getdealer/get-all-dealer-services?email=${email}`
      )
      .then((res) => {
        const services = res.data;
        console.log(services);
        // console.log(services.map((dealer)=>dealer.dealerservice),'hiii')
        dispatch(fetchServicesSucces(res.data));
      })
      .catch((error) => {
        dispatch(fetchServicesFailure(error.message));
      });
  };
};
