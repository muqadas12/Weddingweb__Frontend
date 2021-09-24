import axios from "axios";
import {
  FETCH_BOOKPHOTOGRAPHY_REQUEST,
  FETCH_BOOKPHOTOGRAPHY_SUCCESS,
  FETCH_BOOKPHOTOGRAPHY_FAILURE,
} from "./PhotoBooking.types";

export const fetchPhoto = (data) => {
  return (dispatch) => {
    dispatch(fetchBookPhotographerRequest());
    axios
      .post("http://localhost:2000/api/bookingPhoto/booking", data)
      .then((res) => {
        const bookPhotographer = res.data;
        console.log(bookPhotographer, "hiii");
        alert("Photographer booked successfully");
        dispatch(fetchBookPhotographerSucces(bookPhotographer));
      })
      .catch((error) => {
        dispatch(fetchBookPhotographerFailure(error.message));
      });
  };
};

export const fetchBookPhotographerRequest = () => {
  return {
    type: FETCH_BOOKPHOTOGRAPHY_REQUEST,
  };
};
export const fetchBookPhotographerSucces = (bookPhotographer) => {
  return {
    type: FETCH_BOOKPHOTOGRAPHY_SUCCESS,
    payload: bookPhotographer,
  };
};

export const fetchBookPhotographerFailure = (error) => {
  return {
    type: FETCH_BOOKPHOTOGRAPHY_FAILURE,
    payload: error,
  };
};
