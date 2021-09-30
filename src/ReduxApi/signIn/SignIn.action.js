/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import axios from 'axios';
import {
  FETCH_SIGNIN_REQUEST,
  FETCH_SIGNIN_SUCCESS,
  FETCH_SIGNIN_FAILURE,
} from './SignIn.types';

export const fetchSigninRequest = () => ({
  type: FETCH_SIGNIN_REQUEST,
});
export const fetchSigninSucces = (signinUser) => ({
  type: FETCH_SIGNIN_SUCCESS,
  payload: signinUser,
});

export const fetchSigninFailure = (error) => ({
  type: FETCH_SIGNIN_FAILURE,
  payload: error,
});
export const FetchSignInUser = (data) => {
  return (dispatch) => {
    dispatch(fetchSigninRequest());
    axios
      .post('http://localhost:2000/api/users/login', data)
      .then((res) => {
        const signinUser = res.data;
        console.log(signinUser, 'hiii');
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('email', res.data.email);

        alert(`You are signIn as ${data.email}`);

        // window.location="http://localhost:3000/dealer-main"

        console.log(res.data.role);
        console.log(res.data.token);

        dispatch(fetchSigninSucces(signinUser));
      })
      .catch((error) => {
        dispatch(fetchSigninFailure(error.message));
      });
  };
};
