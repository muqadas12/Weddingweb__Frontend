/* eslint-disable no-alert */
/* eslint-disable no-console */
import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_DELETE_REQUEST,
  FETCH_DELETE_SUCCESS,
  FETCH_DELETE_FAILURE,
  FETCH_UPDATE_REQUEST,
  FETCH_UPDATE_SUCCESS,
  FETCH_UPDATE_FAILURE,
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

// DELETING USER

export const deleteUserRequest = () => ({
  type: FETCH_DELETE_REQUEST,
});

export const deleteUserSuccess = (id) => ({
  type: FETCH_DELETE_SUCCESS,
  payload: {
    id,
  },
});

export const deleteUserFailure = (err) => ({
  type: FETCH_DELETE_FAILURE,
  payload: {
    err,
  },
});

export const deleteDealer = (_id) => (dispatch) => {
  dispatch(deleteUserRequest());
  axios
    .delete(`http://localhost:2000/api/delUser/delete/${_id}`)
    .then((response) => {
      // response.data is the users
      const delusers = response.data;
      alert('deleted!');

      dispatch(deleteUserSuccess(delusers));
    })
    .catch((error) => {
      // error.message is the error message
      dispatch(deleteUserFailure(error.message));
    });
};

// UPDATING USER
export const updateUserRequest = () => ({
  type: FETCH_UPDATE_REQUEST,
});

export const updateUserSuccess = (_id, updateUser) => ({
  type: FETCH_UPDATE_SUCCESS,
  payload: {
    _id,
    updateUser,
  },
});

export const updateUserFailure = (err) => ({
  type: FETCH_UPDATE_FAILURE,
  payload: {
    err,
  },
});
export const fetchupdated = (_id, userInfo) => (dispatch) => {
  console.log(userInfo);
  axios
    .put(`http://localhost:2000/api/updateuser/${_id}`, userInfo)
    .then((response) => {
      const updateUser = response.data.dataL;
      console.log(response);
      alert('updated');
      dispatch(updateUserSuccess(updateUser));
    })
    .catch((error) => {
      dispatch(updateUserFailure(error.message));
    });
};
