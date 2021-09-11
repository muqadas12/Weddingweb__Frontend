import { combineReducers } from "redux";
import userReducer from "../redux/Users/Reducer";
const rootReducer=combineReducers({
    userReducer:userReducer
})

export default rootReducer;