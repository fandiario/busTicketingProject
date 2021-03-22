import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Login from "../Login/Login"
import Register from "../Register/Register"


const Stack = createStackNavigator ()
const StackNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Register" component={Register}></Stack.Screen>

        </Stack.Navigator>
    )
}

export default StackNavigation