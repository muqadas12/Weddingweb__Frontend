import axios from "axios";
import {
  FETCH_BOOKSALOON_REQUEST,
  FETCH_BOOKSALOON_SUCCESS,
  FETCH_BOOKSALOON_FAILURE,
} from "./SaloonBooking.types";

export const fetchSaloon = (payload) => {
  return (dispatch) => {
    dispatch(fetchBookSaloonRequest());
    axios
      .post("http://localhost:2000/api/saloonBooking/saloon", payload)
      .then((res) => {
        const bookSaloon = res.data;
        console.log(bookSaloon, "hiii");
        alert("Saloon booked successfully");
        dispatch(fetchBookSaloonSucces(bookSaloon));
      })
      .catch((error) => {
        dispatch(fetchBookSaloonFailure(error.message));
      });
  };
};

export const fetchBookSaloonRequest = () => {
  return {
    type: FETCH_BOOKSALOON_REQUEST,
  };
};
export const fetchBookSaloonSucces = (bookSaloon) => {
  return {
    type: FETCH_BOOKSALOON_SUCCESS,
    payload: bookSaloon,
  };
};

export const fetchBookSaloonFailure = (error) => {
  return {
    type: FETCH_BOOKSALOON_FAILURE,
    payload: error,
  };
};
