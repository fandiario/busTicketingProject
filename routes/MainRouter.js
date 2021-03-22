import React from "react"
import { createBottomTabNavigator } from"@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from "../src/Screens/Home/Home"
import Profile from "../src/Screens/Profile/Profile"
import BookingHistory from "../src/Screens/BookingHistory/BookingHistory"

const Tab = createBottomTabNavigator ()
const MainRouter = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
            activeTintColor: "#f5f6fa",
            activeBackgroundColor: "#d35400",
            size: 5
            }}
        >   
            <Tab.Screen name="Home" component={Home}
                options={{tabBarIcon: ({color, size}) => {
                    return (
                        <Icon name="home" color={color} size={size}></Icon>
                    )
                }
            }}
            ></Tab.Screen>
            <Tab.Screen name="Profile" component={Profile}
                options={{tabBarIcon: ({color, size}) => {
                    return (
                        <Icon name="user" color={color} size={size}></Icon>
                    )
                }
            }}
            ></Tab.Screen>
            <Tab.Screen name="Booking History" component={BookingHistory}
                options={{tabBarIcon: ({color, size}) => {
                    return (
                        <Icon name="history" color={color} size={size}></Icon>
                    )
                }
            }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}

export default MainRouter