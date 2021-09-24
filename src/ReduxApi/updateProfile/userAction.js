import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

export const fetchUsersupdated = (props) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get(
        "http://localhost:2000/api/users/gettingusers" + props.match.params.id
      )
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
};
export const fetchupdated = (id) => {
  return (dispatch) => {
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
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
