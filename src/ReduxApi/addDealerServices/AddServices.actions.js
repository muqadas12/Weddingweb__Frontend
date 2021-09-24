import axios from "axios";
import {
  FETCH_ADDSERVICES_REQUEST,
  FETCH_ADDSERVICES_SUCCESS,
  FETCH_ADDSERVICES_FAILURE,
} from "./AddServices.types";

export const fetchAddServices = (formData) => {
  return (dispatch) => {
    dispatch(fetchAddServicesRequest());
    axios
      .post("http://localhost:2000/api/postdealer/post-dealers", formData)
      .then((res) => {
        const addservices = res.data;
        console.log(addservices, "hiii");
        alert("service added successfully");
        dispatch(fetchAddServicesSucces(addservices));
      })
      .catch((error) => {
        dispatch(fetchAddServicesFailure(error.message));
      });
  };
};

export const fetchAddServicesRequest = () => {
  return {
    type: FETCH_ADDSERVICES_REQUEST,
  };
};
export const fetchAddServicesSucces = (addservices) => {
  return {
    type: FETCH_ADDSERVICES_SUCCESS,
    payload: addservices,
  };
};

export const fetchAddServicesFailure = (error) => {
  return {
    type: FETCH_ADDSERVICES_FAILURE,
    payload: error,
  };
};
