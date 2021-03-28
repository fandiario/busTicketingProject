import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

// Screens
import Home from "../src/Screens/Home/Home"
import ShuttlesList from "../src/Screens/ShuttlesList/ShuttlesList"
import ShuttleDetail from "../src/Screens/ShuttleDetail/ShuttleDetail"
import BookingDetail from "../src/Screens/BookingDetail/BookingDetail"
import Payment from "../src/Screens/Payment/Payment"

const Stack = createStackNavigator ()
const HomeStacknavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="ShuttlesList" component={ShuttlesList}></Stack.Screen>
            <Stack.Screen name="ShuttleDetail" component={ShuttleDetail}></Stack.Screen>
            <Stack.Screen name="BookingDetail" component={BookingDetail}></Stack.Screen>
            <Stack.Screen name="Payment" component={Payment}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default HomeStacknavigation