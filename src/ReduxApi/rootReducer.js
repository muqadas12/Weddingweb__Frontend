import { combineReducers } from 'redux'

import userReducer from './ViewProfile/userReducer'
import viewServiceReducer from './Saloonservices/SaloonReducers'
import carRental from "./CarRental/CarReducer"
import cateringService from "./Catering/CateringReducer"
import photoReducer from './Photography/PhotographyReducer'
import dealerReducer from './ViewDealerProfile/Dealer.reducer'
const rootReducer = combineReducers({
  
  user: userReducer,
  saloon:viewServiceReducer,
  carrent:carRental,
  catering:cateringService,
  photo:photoReducer,
  dealerProfile:dealerReducer

})

export default rootReducer