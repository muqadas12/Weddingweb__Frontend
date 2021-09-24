import axios from "axios";
import {
  FETCH_SIGNIN_REQUEST,
  FETCH_SIGNIN_SUCCESS,
  FETCH_SIGNIN_FAILURE,
} from "./SignIn.types";
import { useHistory } from "react-router-dom";

export const FetchSignInUser = (data) => {
  const history = useHistory();

  return (dispatch) => {
    dispatch(fetchSigninRequest());
    axios
      .post("http://localhost:2000/api/users/login", data)
      .then((res) => {
        const signinUser = res.data;
        console.log(signinUser, "hiii");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.email);

        alert(`You are signIn as ${data.email}`);

        // window.location="http://localhost:3000/dealer-main"

        {
          res.data.role === "Dealer"
            ? history.push("/dealer-main")
            : history.push("/customer-main");
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

export const fetchSigninRequest = () => {
  return {
    type: FETCH_SIGNIN_REQUEST,
  };
};
export const fetchSigninSucces = (signinUser) => {
  return {
    type: FETCH_SIGNIN_SUCCESS,
    payload: signinUser,
  };
};

export const fetchSigninFailure = (error) => {
  return {
    type: FETCH_SIGNIN_FAILURE,
    payload: error,
  };
};
// payload is the data we need to pass to reducer
