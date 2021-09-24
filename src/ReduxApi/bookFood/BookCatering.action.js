import axios from 'axios';
import {
  FETCH_BOOKFOOD_REQUEST,
  FETCH_BOOKFOOD_SUCCESS,
  FETCH_BOOKFOOD_FAILURE,
} from './BookCatering.types';

export const fetchBookFoodRequest = () => ({
  type: FETCH_BOOKFOOD_REQUEST,
});

export const fetchBookFoodSucces = (bookFood) => ({
  type: FETCH_BOOKFOOD_SUCCESS,
  payload: bookFood,
});

export const fetchBookFoodFailure = (error) => ({
  type: FETCH_BOOKFOOD_FAILURE,
  payload: error,
});
export const fetchFoodServices = (payload) => (dispatch) => {
  dispatch(fetchBookFoodRequest());
  axios
    .post('http://localhost:2000/api/cateringfood/booking', payload)
    .then((res) => {
      const bookFood = res.data;
      console.log(bookFood, 'hiii');
      alert('Food booked successfully');
      dispatch(fetchBookFoodSucces(bookFood));
    })
    .catch((error) => {
      dispatch(fetchBookFoodFailure(error.message));
    });
};
