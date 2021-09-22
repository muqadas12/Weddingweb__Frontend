import axios from "axios";
import {
  FETCH_DEALER_REQUEST,
  FETCH_DEALER_SUCCESS,
  FETCH_DEALER_FAILURE,
} from "./Dealer.types";

export const fetchDealers = () => {
  return (dispatch) => {
    dispatch(fetchDealerRequest());
    axios
      .get("http://localhost:2000/api/users/gettingDealers")
      .then((res) => {
        const dealers = res.data.dataL;
        dispatch(fetchDealerSucces(dealers));
      })
      .catch((error) => {
        dispatch(fetchDealerFailure(error.message));
      });
  };
};

export const fetchDealerRequest = () => {
  return {
    type: FETCH_DEALER_REQUEST,
  };
};
export const fetchDealerSucces = (dealers) => {
  return {
    type: FETCH_DEALER_SUCCESS,
    payload: dealers,
  };
};

export const fetchDealerFailure = (error) => {
  return {
    type: FETCH_DEALER_FAILURE,
    payload: error,
  };
};
//payload is the data we need to pass to reducer
