let initialState = {
    shuttleList: null,
    errorList: null,
    shuttleDetail: null,
    errorDetail: null,
    seatBooked: [],
    totalPrice: null,
}

const shuttlesReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_DATA_LIST_SUCCESS" :
            return {...state, shuttleList: action.payload, errorList: null}

        case "GET_DATA_LIST_FAILED" :
            return {...state, shuttleList: null, errorList: action.payload}

        case "GET_DATA_DETAIL_SUCCESS" :
            return {...state, shuttleDetail: action.payload, errorDetail: null}

        case "GET_DATA_DETAIL_FAILED" :
            return {...state, shuttleDetail: null, errorDetail: action.payload}

        case "GET_DATA_SEAT_BOOKED" :
            return {...state, seatBooked: action.payload}

        default: 
            return state
    }
}

export default shuttlesReducer