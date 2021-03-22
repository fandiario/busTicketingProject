import React, { Component, useState } from 'react'
// import { Button, Text, TextInput, View } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome"
import { Button, Container, Content, Footer, Form, Label, Item, Input, Text, View, Row, Grid, Col, H2 } from 'native-base'


// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"


const Login = ({navigation: {navigate}}) => {

    const [inputUser, setInputUser] = useState (
        {
            email: "",
            password: "",
            error: ""
        }
    )

    const onEmailValidation = (input) => {

    }

    const onPasswordValidation = (input) => {

    }

    const onLogin = () => {
        
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
                        <Input name="email"></Input>
                    </Item>

                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input name="password"></Input>
                    </Item>
                </Form>

                <Text style={{textAlign: "right" , ...spacingStyle.myOne, ...spacingStyle.mrThree, ...colorStyle.secondary,...typoStyle.fsTwo}}>
                    Forgot your Password ?
                </Text>

                <Button rounded block style={{...colorStyle.bgPrimary,  ...spacingStyle.mtThree}}>
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

// From Lecture
// const Login = () => {
//     return (
//         <Container>
//             <Content>
//                 <Grid>
//                     <Col>
//                         <Icon name="chevron-circle-left"/>
//                     </Col>
//                 </Grid>

//                 <Grid>
//                     {/* Grid seperti div yang sudah di pakai flex */}

//                     <Row style={{...spacingStyle.plFive, ...spacingStyle.ptFive}}>
//                         <Text style={{...typoStyle.fsFive, ...typoStyle.fsBold}}>
//                             Sign In
//                         </Text>
//                     </Row>

//                     <Row style={{...spacingStyle.plFive, ...spacingStyle.ptFive}}>
//                         <Text style={{...typoStyle.fsFive, ...typoStyle.fsBold}}>
//                             Welcome
//                         </Text>
//                     </Row>
//                 </Grid>
         
//             </Content>
//         </Container>
//     )
// }


// Without Native Base
// const Login = ({navigation: {navigate}}) => {
//     return (
//         <View style={{...spacingStyle.mxThree, ...spacingStyle.mtFive, alignContent: "space-between"}}>
//             <Text style={{...typoStyle.fsFive, fontWeight: "bold"}}>
//                 Login Page
//             </Text>

//             <View style={{...spacingStyle.myFive}}> 
//                 <TextInput placeholder="Email" style={{...spacingStyle.mbOne, ...borderStyle.borderDark, ...borderStyle.borderWidthTwo, ...borderStyle.borderRadFive}}></TextInput>
//                 <TextInput placeholder="Password" style={{...spacingStyle.mbOne, ...borderStyle.borderDark, ...borderStyle.borderWidthTwo, ...borderStyle.borderRadFive}}></TextInput>
//             </View>

//             <View>
//                 <View>
//                     <Button title="Log In" color="#d35400"></Button>
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
//                 <Text onPress={() => navigate ("Register")}>
//                     Haven't registered yet ?
//                 </Text>
//             </View>
            
//         </View>
//     )
// }

export default Login