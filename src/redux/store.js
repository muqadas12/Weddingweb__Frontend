
import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../redux/Reducers/authReducers"

export default configureStore({
  reducer: {
    user:authReducer
  }
})