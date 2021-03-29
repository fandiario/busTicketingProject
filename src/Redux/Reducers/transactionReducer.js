let initState = {
    dataTransaction: null
}

const transactionReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_DATA_TRANSACTION": 
            return {dataTransaction: action.payload}
        
        default:
            return state
    }
}

export default transactionReducer