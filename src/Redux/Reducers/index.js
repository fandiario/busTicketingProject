import { combineReducers } from "redux"

import userReducer from "./userReducer"
import searchReducer from "./searchReducer"
import shuttleReducer from "./shuttleReducer"

const allReducer = combineReducers (
    {
        user: userReducer,
        search: searchReducer,
        shuttles: shuttleReducer
    }
)

export default allReducer