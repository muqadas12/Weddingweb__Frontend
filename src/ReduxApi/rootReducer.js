import { combineReducers } from "redux";

import userReducer from "./ViewProfile/userReducer";
import viewServiceReducer from "./Saloonservices/SaloonReducers";
import carRental from "./CarRental/CarReducer";
import cateringService from "./Catering/CateringReducer";
import photoReducer from "./Photography/PhotographyReducer";
import dealerReducer from "./ViewDealerProfile/Dealer.reducer";
import servicesReducer from "./ViewDealerServices/Service.reducer";
import addservicesReducer from "./addDealerServices/AddServices.reducers";
import PhotographerbookingReducer from "./PhotographerBooking/PhotoBooking.reducer";
import carBookingReducer from "./carBooking/CarBooking.reducer";
import saloonBookingReducer from "./saloonBooking/SaloonBooking.reducer";
const rootReducer = combineReducers({
  user: userReducer,
  saloon: viewServiceReducer,
  carrent: carRental,
  catering: cateringService,
  photo: photoReducer,
  dealerProfile: dealerReducer,
  service: servicesReducer,
  addservice: addservicesReducer,
  bookPhotographers: PhotographerbookingReducer,
  bookcars: carBookingReducer,
  booksaloons: saloonBookingReducer,
});

export default rootReducer;
