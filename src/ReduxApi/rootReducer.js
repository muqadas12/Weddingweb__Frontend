import { combineReducers } from 'redux'

import userReducer from './ViewProfile/userReducer'
import viewServiceReducer from './Saloonservices/SaloonReducers'
import carRental from "./CarRental/CarReducer"
import cateringService from "./Catering/CateringReducer"
import photoReducer from './Photography/PhotographyReducer'
import dealerReducer from './ViewDealerProfile/Dealer.reducer'
import servicesReducer from './ViewDealerServices/Service.reducer'
import addservicesReducer from './addDealerServices/AddServices.reducers'
const rootReducer = combineReducers({
  
  user: userReducer,
  saloon:viewServiceReducer,
  carrent:carRental,
  catering:cateringService,
  photo:photoReducer,
  dealerProfile:dealerReducer,
  service:servicesReducer,
  addservice:addservicesReducer

})

export default rootReducer