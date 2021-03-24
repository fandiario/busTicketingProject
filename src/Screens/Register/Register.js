import React, { Component, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, Container, Content, Footer, Form, H2, Label, Item, Input, Text, View } from 'native-base'

// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"


// Redux
import { connect } from "react-redux"
import { onUserRegister } from "./../../Redux/Actions/userAction"

const Register = ({navigation: {navigate}, onUserRegister, user}) => {

    const [inputUser, setInputUser] = useState (
        {
            email: "",
            password: "",
            error: ""
        }
    )

    const onEmailValidation = (input) => {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (regex.test (input)) {
            setInputUser ({...inputUser, email: input, error: ""})  
            // console.log (inputUser.email)         
        
        } else {
            setInputUser ({...inputUser, error: "Invalid email address"})
        }   
    }

    const onPasswordValidation = (input) => {
        let symbol = /[!@#$%^&*]/

        if (input.length < 6) {
            return setInputUser({...inputUser, error:"Min. length of password is 6 characters"})
        }

        if (!symbol.test (input)) {
            return setInputUser ({...inputUser, error: "Password must include !, @, #, $, %, ^, & or *"})

        } else {
            setInputUser ({...inputUser, password: input, error: ""})
        }

    }

    const submitRegister = () => {
        onUserRegister (inputUser.email, inputUser.password)
    }

    return (
        <Container>
        
            <Content>

                <H2 style={{...spacingStyle.mtThree, ...spacingStyle.mlFive, ...typoStyle.fsBold}}>
                    Register Page
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

                    {/* <Item floatingLabel>
                        <Label>Confirm Password</Label>
                        <Input></Input>
                    </Item> */}
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

                {
                    user.loading ?

                    <Button disabled rounded block style={{...colorStyle.bgDisabled,  ...spacingStyle.mtThree}} onPress={submitRegister}>
                        <Text style={{...colorStyle.light}}>
                            Submitting Data
                        </Text>
                    </Button>

                    :

                    <Button rounded block style={{...colorStyle.bgPrimary,  ...spacingStyle.mtThree}} onPress={submitRegister}>
                        <Text style={{...colorStyle.light}}>
                            Register
                        </Text>
                    </Button>
                }
                

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
                    Already have an account ?
                </Text>
                <Text style={{...colorStyle.secondary, ...spacingStyle.mlOne}} onPress={() => navigate ("Login")}>
                    Log In
                </Text>
            </Footer>

        </Container>
    )
  
}

const mapDispatchToProps = {
    onUserRegister
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Register)