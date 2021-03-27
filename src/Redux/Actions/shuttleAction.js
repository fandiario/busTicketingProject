import React from "react"
import Axios from "axios"

// urlAPI
import {urlAPI} from "./../../Supports/Constants/urlAPI"

export const getShuttleList = (searchDeparture, searchArrival) => {
    return (dispatch) => {
        // console.log (`check before axios`)
        // console.log (urlAPI + `/shuttles?from=${searchDeparture}&to=${searchArrival}`)
        Axios.get (urlAPI + `/shuttles?from=${searchDeparture}&to=${searchArrival}`)

        .then ((res) => {
            // console.log (res.data)
            dispatch (
                {
                    type: "GET_DATA_LIST_SUCCESS",
                    payload: res.data
                }
            )
        })

        .catch ((err) => {
            dispatch (
                {
                    type: "GET_DATA_LIST_FAILED",
                    payload: err
                }
            )
        })

    }
}   

export const getShuttleDetail = (id) => {
    return (dispatch) => {
        Axios.get (urlAPI + `/shuttles/${id}`)

        .then ((res) => {  
                  
            let arrShuttleFacs = []

            for (let i = 0; i < res.data.facility.length; i++) {
                Axios.get (urlAPI + `/facility/${res.data.facility[i]}`)

                .then ((response) => {
                    arrShuttleFacs.push(response.data.facility)
                    res.data.facility = arrShuttleFacs

                    dispatch (
                        {
                            type: "GET_DATA_DETAIL_SUCCESS",
                            payload: res.data
                        }
                    )
                })

                .catch ((err) => {
                    console.log (err)
                })
            }

            dispatch (
                {
                    type: "GET_DATA_DETAIL_SUCCESS",
                    payload: res.data
                }
            )

        })

        .catch ((err) => {
            console.log (err)

            dispatch (
                {
                    type: "GET_DATA_DETAIL_FAILED",
                    payload: err
                }
            )
        })
    }
}

export const getBookedSeat = (idShuttle, departureDate) => {
    return (dispatch) => {
        Axios.get (urlAPI + `/transaction?idShuttle=${idShuttle}&departureDate=${departureDate}`)

        .then ((res) => { 
            let arrSeat = []

            for (let i = 0; i < res.data.length; i++) {

                for (let j = 0; j < res.data[i].seat.length; j++) {
                    arrSeat.push (res.data[i].seat[j])
                } 
            }

            dispatch (
                {
                    type: "GET_DATA_SEAT_BOOKED",
                    payload: arrSeat
                }
            )
        })

        .catch ((err) => {
            console.log (err)
        })
    }
}
