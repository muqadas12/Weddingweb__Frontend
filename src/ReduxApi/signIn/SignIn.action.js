/* eslint-disable no-lone-blocks */
/* eslint-disable import/first */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import axios from 'axios';

import {
  FETCH_SIGNIN_REQUEST,
  FETCH_SIGNIN_SUCCESS,
  FETCH_SIGNIN_FAILURE,
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_REQUEST,
  FETCH_SIGNUP_FAILURE,
} from './SignIn.types';

export const fetchSigninRequest = () => ({
  type: FETCH_SIGNIN_REQUEST,
});
export const fetchSignUPRequest = () => ({
  type: FETCH_SIGNUP_REQUEST,
});
export const fetchSigninSucces = (signinUser) => ({
  type: FETCH_SIGNIN_SUCCESS,
  payload: signinUser,
});
export const fetchSignUPSucces = (signinUser) => ({
  type: FETCH_SIGNUP_SUCCESS,
  payload: signinUser,
});

export const fetchSigninFailure = (error) => ({
  type: FETCH_SIGNIN_FAILURE,
  payload: error,
});
export const fetchSignUPFailure = (error) => ({
  type: FETCH_SIGNUP_FAILURE,
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
        {
          // eslint-disable-next-line no-unused-expressions
          res.data.role === 'Dealer'
            ? (window.location = 'http://localhost:3000/dealer-main')
            : (window.location = 'http://localhost:3000/customer-main');
        }

        console.log(res.data.role);
        console.log(res.data.token);

        dispatch(fetchSigninSucces(signinUser));
      })
      .catch((error) => {
        dispatch(fetchSigninFailure(error.message));
      });
  };
};
export const FetchSignUpUser = (data) => {
  return (dispatch) => {
    dispatch(fetchSignUPRequest());
    axios
      .post('https://wedding-web-app.herokuapp.com/api/users/signup', data)
      .then((res) => {
        const signupUser = res.data;
        console.log(signupUser, 'hiii');
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('email', res.data.email);

        alert(`You are signUp as ${data.email}`);
        window.location = 'http://localhost:3000/sign-in';

        console.log(res.data.role);
        console.log(res.data.token);

        dispatch(fetchSignUPSucces(signupUser));
      })
      .catch((error) => {
        dispatch(fetchSignUPFailure(error.message));
      });
  };
};
