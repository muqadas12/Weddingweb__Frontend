import axios from "axios";
import {
  FETCH_SALOON_SERVICE_REQUEST,
  FETCH_SALOON_SERVICE_SUCCESS,
  FETCH_SALOON_SERVICE_FAILURE,
} from "./SaloonTypes";

export const fetchServices = () => {
  return (dispatch) => {
    dispatch(fetchsaloonServiceRequest());
    axios
      .get("http://localhost:2000/api/saloon/get-saloon-services")
      .then((res) => {
        const saloonser = res.data.dataSaloon;
        dispatch(fetchsaloonServiceSuccess(saloonser));
      })
      .catch((err) => {
        dispatch(fetchsaloonServiceFailure(err.msg));
      });
  };
};

export const fetchsaloonServiceRequest = () => {
  return {
    type: FETCH_SALOON_SERVICE_REQUEST,
  };
};
export const fetchsaloonServiceSuccess = (saloonser) => {
  return {
    type: FETCH_SALOON_SERVICE_SUCCESS,
    payload: saloonser,
  };
};

export const fetchsaloonServiceFailure = (err) => {
  return {
    type: FETCH_SALOON_SERVICE_FAILURE,
    payload: err,
  };
};
