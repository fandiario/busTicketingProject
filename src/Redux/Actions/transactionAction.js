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

export const getAllDataTransaction = (idUser) => {
    return (dispatch) => {
        Axios.get (urlAPI + `/transactions?idUser=${idUser}`)

        .then ((res) => {
            dispatch (
                {
                    type: "GET_ALL_DATA_TRANSACTION",
                    payload: res.data
                }
            )
        })

        .catch ((err) => {
            console.log (err)
        })
    }
}

export const getTimeExpired = (expiredAt) => {
    return {
        type: "GET_TIME_EXPIRED",
        payload: expiredAt
    }
}