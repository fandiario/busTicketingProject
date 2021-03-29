let initState = {
    id: "",
    email: null,
    error: "",
    loading: null
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOADING":
            return {...state, loading: true}

        case "REGISTER_SUCCESS":
            return {id: action.payload, error: "", loading: null}

        case "REGISTER_FAILED":
            return {...state, error: action.payload, loading: null}

        case "LOGIN_SUCCESS": 
            return {id: action.payload, error: "", loading: null}

        case "LOGIN_FAILED":
            return {...state, error: action.payload, loading: null}

        case "LOGOUT_SUCCESS":
            return {id: "", error: "", loading: null}

        case "GET_USER_EMAIL":
            return {...state, email: action.payload, error: "", loading: null}

        default:
            return state
    }
}

export default userReducer