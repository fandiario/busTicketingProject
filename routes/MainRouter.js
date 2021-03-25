import React from "react"
import { createBottomTabNavigator } from"@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/FontAwesome'

import Homenavigator from "./HomeRouter"
import Profile from "../src/Screens/Profile/Profile"
import BookingHistory from "../src/Screens/BookingHistory/BookingHistory"
// import ShuttlesList from "../src/Screens/ShuttlesList/ShuttlesList"

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
            <Tab.Screen name="HomeNavigator" component={Homenavigator}
                options={{tabBarIcon: ({color, size}) => {
                    return (
                        <Icon name="home" color={color} size={size}></Icon>
                    )
                }
            }}
            ></Tab.Screen>
            {/* <Tab.Screen name="Shuttles" component={ShuttlesList}
                options={{tabBarIcon: ({color, size}) => {
                    return (
                        <Icon name="bus" color={color} size={size}></Icon>
                    )
                }
            }}
            ></Tab.Screen> */}
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