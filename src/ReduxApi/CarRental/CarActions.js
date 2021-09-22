import {
  FETCH_CARRENT_REQUEST,
  FETCH_CARRENT_SUCCESS,
  FETCH_CARRENT_FAILURE,
} from "./CarTypes";
import axios from "axios";
export const fetchCarRental = () => {
  return (dispatch) => {
    dispatch(fetchCarrequest());
    axios
      .get("http://localhost:2000/api/cars/get-cars")
      .then((res) => {
        const carrent = res.data.dataCar;
        dispatch(fetchCarsuccess(carrent));
      })
      .catch((err) => {
        dispatch(fetchCarFailure(err.msg));
      });
  };
};

export const fetchCarrequest = () => {
  return {
    type: FETCH_CARRENT_REQUEST,
  };
};
export const fetchCarsuccess = (carrent) => {
  return {
    type: FETCH_CARRENT_SUCCESS,
    payload: carrent,
  };
};
export const fetchCarFailure = (err) => {
  return {
    type: FETCH_CARRENT_FAILURE,
    payload: err,
  };
};
