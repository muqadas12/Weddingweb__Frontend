import axios from "axios";
import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
} from "./Service.types";

export const fetchServices = () => {
  const email = localStorage.getItem("email");
  return (dispatch) => {
    dispatch(fetchServicesRequest());
    axios
      .get(`http://localhost:2000/api/getdealer/get-dealers?email=${email}`)
      .then((res) => {
        const services = res.data.data;
        console.log(services);
        // console.log(services.map((dealer)=>dealer.dealerservice),'hiii')
        dispatch(fetchServicesSucces(res.data));
      })
      .catch((error) => {
        dispatch(fetchServicesFailure(error.message));
      });
  };
};

export const fetchServicesRequest = () => {
  return {
    type: FETCH_SERVICES_REQUEST,
  };
};
export const fetchServicesSucces = (services) => {
  return {
    type: FETCH_SERVICES_SUCCESS,
    payload: services,
  };
};

export const fetchServicesFailure = (error) => {
  return {
    type: FETCH_SERVICES_FAILURE,
    payload: error,
  };
};
//payload is the data we need to pass to reducer
