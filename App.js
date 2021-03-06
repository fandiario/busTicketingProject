/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react"

// Router
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import RegisterNavigation from "./routes/RegisterRouter"
import MainNavigation from "./routes/MainRouter"

//Redux and ASyncStorage 
import { connect } from "react-redux"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { onSaveAsyncStorage } from "./src/Redux/Actions/userAction"

// Splash
import Splash from "./src/Screens/Splash/Splash"

// OneSignal
import OneSignal from "react-native-onesignal"

// Redux
// import { applyMiddleware, createStore } from 'redux'
// import { Provider } from "react-redux"
// import thunk from "redux-thunk"
// import allReducer from "./src/Redux/Reducers/index"

// const store = createStore (allReducer, applyMiddleware (thunk))

const App = ({user, onSaveAsyncStorage}) => {

  const [isLogin, setLogin] = useState (false)

  const getAsyncStorageData = () => {
    AsyncStorage.getItem ("id")

    .then ((res) => {
      onSaveAsyncStorage (res)
      setLogin (true)
      console.log (`id: ${res}`)
    })

    .catch ((err) => {
      console.log (err)
    })
  }

  useEffect ((async) => {
    getAsyncStorageData()

    /* O N E S I G N A L   S E T U P */
    OneSignal.setAppId("5b426a94-5145-4e9e-aebd-cdb4bb00cbbb");
    OneSignal.setLogLevel(6, 0);
    OneSignal.setRequiresUserPrivacyConsent(false);
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
        console.log("Prompt response:", response);
    })
  }, [])

  if (isLogin === false) {
    return (
      <Splash></Splash>
    )
  
  } else {

    return (
    
      // <Provider store= {store}>
      //   <NavigationContainer>
        
      //     {/* <MainNavigation></MainNavigation> */}
      //     <RegisterNavigation></RegisterNavigation>
  
      //   </NavigationContainer>
      // </Provider>
  
      <NavigationContainer>
  
        {
          user.id ?
  
            <MainNavigation></MainNavigation>
          :
            <RegisterNavigation></RegisterNavigation>
        }
  
      </NavigationContainer>
      
    )
  }

  
}

// export default App

const mapDispatchToProps = {
  onSaveAsyncStorage
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
    
}

export default connect (mapStateToProps, mapDispatchToProps) (App)
