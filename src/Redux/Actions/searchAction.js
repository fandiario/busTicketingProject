export const onBookingSearch = (input) => {

    return (dispatch) => {
        // console.log (`fromsearch action`)
        console.log (input)
        dispatch (
            {
                type: "ON_SEARCH_BOOKING",
                payload: input
            }
        )
    }
    
    
}