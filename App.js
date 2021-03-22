/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react"

import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"

import RegisterNavigation from "./routes/RegisterRouter"
import MainNavigation from "./routes/MainRouter"

const App = () => {
  return (
    
    <NavigationContainer>
      
      <MainNavigation></MainNavigation>
      {/* <RegisterNavigation></RegisterNavigation> */}

    </NavigationContainer>
    
  )
}

export default App
