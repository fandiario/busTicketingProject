import React, { Component, useState } from 'react'
import Axios from "axios"
import Icon from "react-native-vector-icons/FontAwesome"
import { Button, Container, Content, Footer, Form, Label, Item, Input, Text, View, Row, Grid, Col, H2 } from 'native-base'


// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"

// Link API
import { urlAPI } from "../../Supports/Constants/urlAPI"

// Redux
import { connect } from "react-redux"
import { onUserLogin } from "./../../Redux/Actions/userAction"


const Login = ({navigation: {navigate}, onUserLogin, user}) => {

    const [inputUser, setInputUser] = useState (
        {
            email: "",
            password: "",
            error: null
        }
    )

    const onEmailValidation = (input) => {
        // console.log ("checkEmailValid")
        Axios.get (urlAPI + `/users?email=${input}`)

        .then ((res) => {
            // console.log (res.data)
            if (res.data.length > 0) {
                setInputUser ({...inputUser, email: input, error: null})

            } else {
                setInputUser ({...inputUser, error: "Invalid email account"})
            }
        })

        .catch ((err) => {
            console.log (`from login : ${err}`)
        })
    }   

    const onPasswordValidation = (input) => {
        // console.log (`check passValid: ${inputUser.email}`)
        Axios.get (urlAPI + `/users?email=${inputUser.email}`)

        .then ((res) => {
            // console.log (res.data[0].password)
            if (res.data.length > 0) {
                if (res.data[0].password === input) {
                    setInputUser ({...inputUser, password: input, error: null})

                } else {
                    setInputUser ({...inputUser, error: "Invalid password"})
                }

            } else {
                setInputUser ({...inputUser, error: "Invalid password"})
            }
        })

        .catch ((err) => {
            console.log (err)
        })
    }

    const submitLogin = () => {
        onUserLogin (inputUser.email, inputUser.password)
    }

    return (
        <Container>
        
            <Content>
                <H2 style={{...spacingStyle.mtThree, ...spacingStyle.mlFive, ...typoStyle.fsBold}}>
                    Login Page
                </H2>

                <Form style={{...spacingStyle.myFive}}>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input name="email" onChangeText={(input) => onEmailValidation (input)}></Input>
                    </Item>

                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry={true} name="password" onChangeText={(input) => onPasswordValidation (input)}></Input>
                    </Item>
                </Form>

                <View style={{...spacingStyle.mtThree, alignItems:"center"}}>
                    
                        <Text style={{ ...colorStyle.danger, }}>
                            {inputUser.error}
                        </Text>
                    
                    {
                        user.error ?
                            <View style={{...colorStyle.bgDanger, ...borderStyle.borderRadSix, ...borderStyle.borderWarning}}>
                                <Text style={{ ...colorStyle.light, ...spacingStyle.pThree}}>
                                    {user.error}
                                </Text>
                            </View>
                        :

                            null
                    }

                </View>

                <Text style={{textAlign: "right" , ...spacingStyle.myOne, ...spacingStyle.mrThree, ...colorStyle.secondary,...typoStyle.fsTwo}}>
                    Forgot your Password ?
                </Text>

                <Button rounded block style={{...colorStyle.bgPrimary,  ...spacingStyle.mtThree}} onPress={submitLogin}>
                    <Text style={{...colorStyle.light}}>
                        Log In
                    </Text>
                </Button>

                <View style={{justifyContent: "center", alignItems:"center", ...spacingStyle.myFive}}>
                    <Text>
                        Or Log In with
                    </Text>
                </View>

                <Button rounded block iconLeft style={{...colorStyle.bgLight, ...spacingStyle.mbThree}}>
                    <Icon name="google" size={20}></Icon>
                    <Text style={{...colorStyle.dark}}>
                        Google
                    </Text>
                </Button>

                <Button rounded block style={{...colorStyle.bgSecondary, ...spacingStyle.mbThree}}>
                    <Icon name="facebook" size={20} style={{...colorStyle.light}}></Icon>
                    <Text style={{...colorStyle.light}}>
                        Facebook
                    </Text>
                </Button>

            </Content>

            <Footer style={{...colorStyle.bgPrimary, justifyContent: "center", alignItems:"center"}}>
                <Text style={{...colorStyle.light}}>
                    Don't have an account yet ?
                </Text>
                <Text style={{...colorStyle.secondary, ...spacingStyle.mlOne}} onPress={() => navigate ("Register")}>
                    Register Now
                </Text>
            </Footer>

        </Container>
    )
  
}

const mapDispatchToProps = {
    onUserLogin
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Login)