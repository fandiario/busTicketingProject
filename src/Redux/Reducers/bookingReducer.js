let initState = {
    status: null,
    idUser: null,
    idShuttle: null,
    shuttleName: null,
    class: null,
    from: null,
    to: null,
    departureDate: null,
    seats: null,
    passengers: null,
    totalPrice: null,
    contactPhone: null
}

const bookingReducer = (state = initState, action) => {
    switch (action.type) {

        case "ON_PAYMENT" :
            return {
                ...state,
                status: null,
                idUser: null,
                idShuttle: null,
                shuttleName: null,
                class: null,
                from: null,
                to: null,
                departureDate: null,
                seats: null,
                passengers: null,
                totalPrice: null,
                contactPhone: null 
            }
        
        default: 
            return state

    }
}

export default bookingReducer