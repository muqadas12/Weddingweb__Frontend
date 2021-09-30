import axios from 'axios';
import {
  FETCH_PHOTOGRAPHY_REQUEST,
  FETCH_PHOTOGRAPHY_SUCCESS,
  FETCH_PHOTOGRAPHY_FAILURE,
  SET_SELECTED_DEALER,
} from './PhotographyTypes';

export const fetchPhotoRequest = () => ({
  type: FETCH_PHOTOGRAPHY_REQUEST,
});

export const fetchPhotoSuccess = (photos) => ({
  type: FETCH_PHOTOGRAPHY_SUCCESS,
  payload: photos,
});
export const fetchPhotoFailure = (error) => ({
  type: FETCH_PHOTOGRAPHY_FAILURE,
  payload: error,
});
export const setSelectedDealer = (dealer) => ({
  type: SET_SELECTED_DEALER,
  payload: dealer,
});

export const fetchPhotos = () => (dispatch) => {
  dispatch(fetchPhotoRequest());
  axios
    .get('http://localhost:2000/api/photos/get-photo')
    .then((response) => {
      // response.data is the users
      const photos = response.data;

      dispatch(fetchPhotoSuccess(photos));
    })
    .catch((error) => {
      // error.message is the error message
      dispatch(fetchPhotoFailure(error.message));
    });
};
