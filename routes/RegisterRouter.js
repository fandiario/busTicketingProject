import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Login from "../src/Screens/Login/Login"
import Register from "../src/Screens/Register/Register"

const Stack = createStackNavigator ()
const RegisterNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Register" component={Register}></Stack.Screen>                 

        </Stack.Navigator>
    )
}

export default RegisterNavigation
