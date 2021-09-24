import { combineReducers } from 'redux';
import user from './ViewProfile/userReducer';
import viewSaloonServices from './Saloonservices/SaloonReducers';
import viewCarRentalServices from './CarRental/CarReducer';
import viewCateringService from './Catering/CateringReducer';
import viewphotographerServices from './Photography/PhotographyReducer';
import dealerProfile from './ViewDealerProfile/Dealer.reducer';
import servicesReducer from './ViewDealerServices/Service.reducer';
import addservice from './addDealerServices/AddServices.reducers';
import bookPhotographers from './PhotographerBooking/PhotoBooking.reducer';
import bookcars from './carBooking/CarBooking.reducer';
import booksaloons from './saloonBooking/SaloonBooking.reducer';

const rootReducer = combineReducers({
  user,
  viewSaloonServices,
  viewCarRentalServices,
  viewCateringService,
  viewphotographerServices,
  dealerProfile,
  service: servicesReducer,
  addservice,
  bookPhotographers,
  bookcars,
  booksaloons,
});

export default rootReducer;
