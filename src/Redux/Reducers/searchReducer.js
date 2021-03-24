let initState = {
    type: null,
    departure: null,
    arrival: null,
    date: null,
    seat: null
}

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        
        case "ON_SEARCH_BOOKING" :
            return {
                ...state, 
                type: action.payload.type, 
                departure: action.payload.from, 
                arrival: action.payload.to,
                date: action.payload.date,
                seat: action.payload.numSeat,
            }

        default: 
            return state
    }
}

export default searchReducer