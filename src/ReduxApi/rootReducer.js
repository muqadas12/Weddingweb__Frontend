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
import viewservices from './viewOrders/viewCatering/ViewCateringReducer';
import viewOrders from './viewDealerOrders/CateringOrders/Order.reducer';
import countReducers from './Category/countReducers';
import bookHall from './bookHall/BookHall.reducer';
import viewStatusorder from './orderStatus/OrderStatus.reducer';
import viewSaloonorder from './viewOrders/viewSaloonBooking/Saloonbooking.reducer';
import viewDealerSaloonOrder from './viewDealerOrders/saloonOrders/SaloonOrder.reducer';

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
  servicescatering: viewservices,
  viewOrders,
  countReducers,
  bookHall,
  viewStatusorder,
  viewSaloonorder,
  viewDealerSaloonOrder,
});

export default rootReducer;
