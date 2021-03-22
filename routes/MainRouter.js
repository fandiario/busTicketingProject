import React from "react"
import { createBottomTabNavigator } from"@react-navigation/bottom-tabs"

import Home from "../src/Screens/Home/Home"
import Profile from "../src/Screens/Profile/Profile"
import BookingHistory from "../src/Screens/BookingHistory/BookingHistory"

const Tab = createBottomTabNavigator ()
const MainRouter = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
            <Tab.Screen name="Booking History" component={BookingHistory}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default MainRouter