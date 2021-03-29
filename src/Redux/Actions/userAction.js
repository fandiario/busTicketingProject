import Axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { urlAPI } from "./../../Supports/Constants/urlAPI"

export const onUserRegister = (inputEmail, inputPassword) => {
    // console.log ("masuk")
    return (dispatch) => {

        dispatch (
            {
                type: "LOADING"
            }
        )

        Axios.get (urlAPI + `/users?email=${inputEmail}`)

        .then ((res) => {

            if (res.data.length > 0) {
                dispatch (
                    {
                        type: "REGISTER_FAILED",
                        payload: "Email has been registered"
                    }
                )
            } else {
                
                Axios.post (urlAPI + `/users`, {email: inputEmail, password: inputPassword})

                .then ((response) => {

                    AsyncStorage.setItem ("id", (response.data.id).toString ())

                    .then ((resAsyncStorage) => {
                        dispatch (
                            {
                                type: "REGISTER_SUCCESS",
                                payload: response.data.id
                            }
                        )


                    })

                    .catch ((errAsyncStorage) => {
                        console.log (errAsyncStorage)
                    })


                })

                .catch ((error) => {
                    console.log (error)
                })

            }
        })

        .catch ((err) => {
            console.log (err)
        })
    }
}

export const onSaveAsyncStorage = (id) => {
    return ( dispatch ) => {
        dispatch (
            {
                type: "REGISTER_SUCCESS",
                payload: id
            }
        )
    }
}

export const onUserLogin = (inputEmail, inputPassword) => {
    return (dispatch) => {
        Axios.get (urlAPI + `/users?email=${inputEmail}`)

        .then ((res) => {
            AsyncStorage.setItem ("id", (res.data[0].id).toString ())

            .then ((resAsyncStorage) => {
                dispatch (
                    {
                        type: "LOGIN_SUCCESS",
                        payload: res.data[0].id
                    }
                )
            })

            .catch ((errAsyncStorage) => {
                dispatch (
                    {
                        type: "LOGIN_FAILED",
                        payload: errAsyncStorage
                    }
                )
            })
        })

        .catch ((err) => {
            dispatch (
                {
                    type: "LOGIN_FAILED",
                    payload: err
                }
            )
        })
    }
}

export const onUserLogout = () => {
    return ( dispatch ) => {
        AsyncStorage.removeItem ("id")

        .then ((res) => {
            dispatch (
                {
                    type: "LOGOUT_SUCCESS",
                }
            )
        })

        .catch ((err) => {
            console.log (err)
        })
    }
}

export const getUserEmail = (id) => {

    return (dispatch) => {
        Axios.get (urlAPI + `/users/${id}`)

        .then ((res) => {
            dispatch (
                {
                    type: "GET_USER_EMAIL",
                    payload: res.data.email
                }
            )
        })

        .catch ((err) => {
            console.log (err)
        })
    }
}
