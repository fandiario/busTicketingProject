import { combineReducers } from "redux"

import userReducer from "./userReducer"
import searchReducer from "./searchReducer"

const allReducer = combineReducers (
    {
        user: userReducer,
        search: searchReducer
    }
)

export default allReducer