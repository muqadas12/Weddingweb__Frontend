import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './userTypes';

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});
export const fetchUsersupdated = (props) => (dispatch) => {
  dispatch(fetchUsersRequest());
  axios
    .get(`http://localhost:2000/api/users/gettingusers${props.match.params.id}`)
    .then((response) => {
      // response.data is the users
      const users = response.data.dataL;

      dispatch(fetchUsersSuccess(users));
    })
    .catch((error) => {
      // error.message is the error message
      dispatch(fetchUsersFailure(error.message));
    });
};
export const fetchupdated = (id) => (dispatch) => {
  dispatch(fetchUsersRequest());
  axios
    .put(`http://localhost:2000/api/updateuser/${id}`)
    .then((response) => {
      // response.data is the users
      const users = response.data.dataL;

      dispatch(fetchUsersSuccess(users));
    })
    .catch((error) => {
      // error.message is the error message
      dispatch(fetchUsersFailure(error.message));
    });
};
