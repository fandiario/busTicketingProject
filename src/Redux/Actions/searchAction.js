export const onBookingSearch = (input) => {

    console.log (input)

    return (dispatch) => {
        dispatch (
            {
                type: "ON_SEARCH_BOOKING",
                payload: input
            }
        )
    }
    
    
}