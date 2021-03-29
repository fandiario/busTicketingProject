import { combineReducers } from "redux"

import userReducer from "./userReducer"
import searchReducer from "./searchReducer"
import shuttleReducer from "./shuttleReducer"
import bookingReducer from "./bookingReducer"
import transactionReducer from "./transactionReducer"

const allReducer = combineReducers (
    {
        user: userReducer,
        search: searchReducer,
        shuttles: shuttleReducer,
        booking: bookingReducer,
        transactions: transactionReducer
    }
)

export default allReducer