export const onPayment = (input) => {
    return (dispatch) => {
        dispatch (
            {
                type: "ON_PAYMENT",
                payload: input
            }
        )
    }
}