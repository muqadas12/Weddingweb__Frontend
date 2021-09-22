import axios from "axios";
import {
  FETCH_BOOKCAR_REQUEST,
  FETCH_BOOKCAR_SUCCESS,
  FETCH_BOOKCAR_FAILURE,
} from "./CarBooking.types";

export const fetchbookCarServices = (payload) => {
  return (dispatch) => {
    dispatch(fetchBookCarRequest());
    axios
      .post("http://localhost:2000/api/carBooking//carRental", payload)
      .then((res) => {
        const bookCar = res.data;
        console.log(bookCar, "hiii");
        alert("Photographer booked successfully");
        dispatch(fetchBookCarSucces(bookCar));
      })
      .catch((error) => {
        dispatch(fetchBookCarFailure(error.message));
      });
  };
};

export const fetchBookCarRequest = () => {
  return {
    type: FETCH_BOOKCAR_REQUEST,
  };
};
export const fetchBookCarSucces = (bookCar) => {
  return {
    type: FETCH_BOOKCAR_SUCCESS,
    payload: bookCar,
  };
};

export const fetchBookCarFailure = (error) => {
  return {
    type: FETCH_BOOKCAR_FAILURE,
    payload: error,
  };
};
//payload is the data we need to pass to reducer
