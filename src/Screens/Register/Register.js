import React, { Component, useState } from 'react'
// import { Button, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, Container, Content, Footer, Form, H2, Label, Item, Input, Text, View } from 'native-base'



// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"

const Register = ({navigation: {navigate}}) => {

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
            console.log (inputUser.email)         
        
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

    const onRegister = () => {
        
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
                        <Input name="password" onChangeText={(input) => onPasswordValidation (input)}></Input>
                    </Item>

                    {/* <Item floatingLabel>
                        <Label>Confirm Password</Label>
                        <Input></Input>
                    </Item> */}
                </Form>

                <View style={{...spacingStyle.mtThree, alignItems:"center"}}>
                    

                    {
                        inputUser.error ?
                            <View style={{...colorStyle.bgDanger, ...borderStyle.borderRadSix, ...borderStyle.borderWarning}}>
                                <Text style={{ ...colorStyle.light, ...spacingStyle.pThree}}>
                                    {inputUser.error}
                                </Text>
                            </View>
                        :

                            null
                    }

                </View>

                <Button rounded block style={{...colorStyle.bgPrimary,  ...spacingStyle.mtThree}}>
                    <Text style={{...colorStyle.light}}>
                        Submit
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
                    Already have an account ?
                </Text>
                <Text style={{...colorStyle.secondary, ...spacingStyle.mlOne}} onPress={() => navigate ("Login")}>
                    Log In
                </Text>
            </Footer>

        </Container>
    )
  
}

// const Register = ({navigation: {navigate}}) => {
//     return (
//         <View style={{...spacingStyle.mxThree, ...spacingStyle.mtFive, alignContent: "space-between"}}>
//             <Text style={{...typoStyle.fsFive, fontWeight: "bold"}}>
//                 Register Page
//             </Text>

//             <View style={{...spacingStyle.myFive}}> 
//                 <TextInput placeholder="Email" style={{...spacingStyle.mbOne, ...borderStyle.borderDark, ...borderStyle.borderWidthTwo, ...borderStyle.borderRadFive}}></TextInput>
//                 <TextInput placeholder="Password" style={{...spacingStyle.mbOne, ...borderStyle.borderDark, ...borderStyle.borderWidthTwo, ...borderStyle.borderRadFive}}></TextInput>
//                 <TextInput placeholder="Confirm Password" style={{...spacingStyle.mbOne, ...borderStyle.borderDark, ...borderStyle.borderWidthTwo, ...borderStyle.borderRadFive}}></TextInput>
//             </View>

//             <View>
//                 <View>
//                     <Button title="Submit" color="#d35400"></Button>
//                 </View>

//                 <Text style={{...spacingStyle.myThree, justifyContent:"center", alignSelf:"center"}}>
//                     Or Log In with
//                 </Text>

//                 <View style={{...spacingStyle.mbTwo}}>
//                     {/* <Icon name="google" color="black" size={20}></Icon> */}
//                     <Button title="Google"></Button>
//                 </View>

//                 <View style={{...spacingStyle.mbFive}}>
//                     {/* <Icon name="facebook" color="white" size={20}></Icon> */}
//                     <Button title="Facebook" color="#0652DD"></Button>
//                 </View>
//             </View>

//             <View style={{...spacingStyle.mtFive}}>
//                 <Text onPress={() => navigate ("Login")}>
//                     Already Have an Account ?
//                 </Text>
//             </View>
            
//         </View>
//     )
// }

export default Register