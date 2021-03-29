import Axios from "axios"
import {urlAPI} from "../../Supports/Constants/urlAPI"

export const getDataTransaction = (idTransaction) => {
    return (dispatch) => {
        Axios.get (urlAPI + `/transactions/${idTransaction}`)

        .then ((res) => {
            // console.log (res.data)
            dispatch (
                {
                    type: "GET_DATA_TRANSACTION",
                    payload: res.data
                }
            )
        })

        .catch ((err) => {
            console.log (err)
        })
    }

     
}