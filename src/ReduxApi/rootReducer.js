import { combineReducers } from 'redux'

import userReducer from '../ReduxApi/User/userReducer'

const rootReducer = combineReducers({
  
  user: userReducer
})

export default rootReducer