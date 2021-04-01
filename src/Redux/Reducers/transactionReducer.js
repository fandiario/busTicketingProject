let initState = {
    dataTransaction: null,
    timeExpired: null,
    dataAllTransaction: null
}

const transactionReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_DATA_TRANSACTION": 
            return {...state, dataTransaction: action.payload}

        case "GET_ALL_DATA_TRANSACTION":
            return {...state, dataAllTransaction: action.payload}

        case "GET_TIME_EXPIRED":
            return {...state, timeExpired: action.payload}

        default:
            return state
    }
}

export default transactionReducer