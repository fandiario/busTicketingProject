import { combineReducers } from "redux"

import userReducer from "./userReducer"
import searchReducer from "./searchReducer"
import shuttleReducer from "./shuttleReducer"
import bookingReducer from "./bookingReducer"

const allReducer = combineReducers (
    {
        user: userReducer,
        search: searchReducer,
        shuttles: shuttleReducer,
        booking: bookingReducer
    }
)

export default allReducer