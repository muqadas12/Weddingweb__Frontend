import axios from 'axios';
import {
  FETCH_CATERING_REQUEST,
  FETCH_CATERING_SUCCESS,
  FETCH_CATERING_FAILURE,
} from './CateringTypes';

export const fetchcateringrequest = () => ({
  type: FETCH_CATERING_REQUEST,
});
export const fetchcateringSuccess = (cateringser) => ({
  type: FETCH_CATERING_SUCCESS,
  payload: cateringser,
});
export const fetchCateringFailure = (err) => ({
  type: FETCH_CATERING_FAILURE,
  payload: err,
});
export const fetchCatering = () => (dispatch) => {
  dispatch(fetchcateringrequest());

  axios
    .get('http://localhost:2000/api/catering/get-catering')
    .then((res) => {
      const cateringser = res.data;
      console.log(cateringser);
      dispatch(fetchcateringSuccess(cateringser));
    })
    .catch((err) => {
      dispatch(fetchCateringFailure(err.message));
    });
};

// getservices
// export const fetchservicerequest = () => ({
//   type: FETCH_VIEWCATERING_REQUEST,
// });
// export const fetchserviceSuccess = (viewcatering) => ({
//   type: FETCH_VIEWCATERING_SUCCESS,
//   payload: viewcatering,
// });
// export const fetchserviceFailure = (err) => ({
//   type: FETCH_VIEWCATERING_FAILURE,
//   payload: err,
// });
// export const fetchCateringServices = () => (dispatch) => {
//   const email = localStorage.getItem('email');

//   dispatch(fetchservicerequest());

//   axios
//     .get(
//       `http://localhost:2000/api/servicescatering/get-cateringservices?email=${email}`
//     )
//     .then((res) => {
//       const catering = res.data;
//       console.log(catering);
//       dispatch(fetchserviceSuccess(catering));
//     })
//     .catch((err) => {
//       dispatch(fetchserviceFailure(err.message));
//     });
// };
