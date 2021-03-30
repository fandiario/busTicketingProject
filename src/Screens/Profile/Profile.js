import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Button, Container, Text, Grid, Row, H1, H2, View, Spinner, Col, Header, Content, Form, Item, Label, Input, Textarea } from "native-base"

// Redux
import {onUserLogout} from "../../Redux/Actions/userAction"

// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"

// Icon
import Icon from "react-native-vector-icons/FontAwesome"
import { Image } from "react-native"

// Image Picker
import ImagePicker from 'react-native-image-crop-picker'


const Profile = ( {onUserLogout} ) => {

    const [dataUser, setDataUser] = useState(
        {
            profilePict : null,
            name: null,
            email: null,
            password: null,
            idNumber: null,
            phone: null,
            address: null
        }
    )

    const [confirmPass, setConfirmPass] = useState (null)

    useEffect (() => {
        getAsyncStorage ()
    }, [])

    const getAsyncStorage = () => {
        AsyncStorage.getItem ("id")

        .then ((res) => {
            getDataUser (res)
        })

        .catch ((err) => {
            console.log (err)
        })
    }

    const getDataUser = (idUser) => {
        
    }

    const cameraImage = () => {
        ImagePicker.openCamera ({
            width: 300,
            height: 400,
            cropping: true,
        })
        
        .then (image => {
            // console.log(image.path)
            setDataUser ({...dataUser, profilePict: image.path})
        })

        .catch ((err) => {
            console.log (err)
        })
    }

    const galleryImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          })
          
          .then(image => {
            setDataUser ({...dataUser, profilePict: image.path})
          })

          .catch ((err) => {
            console.log (err)
        })
    }

    return (
        <Container>
            <Header style={{...colorStyle.bgPrimary}}>
                <Row style={{...spacingStyle.myThree,}}>
                    <H1 style={{...colorStyle.light, ...typoStyle.fsBold}}>
                        BusyBus
                    </H1>
                </Row>
            </Header>

            <Content>
                <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, justifyContent:"center" }}>
                    <H2 style={{...typoStyle.fsBold}}>
                        User Profile
                    </H2>
                </View>

                <Grid style={{...spacingStyle.mlThree, ...spacingStyle.mtThree}}>
                    <Col style={{marginLeft: 135}}>
                        <Row style={{height: 105}}>
                            <Col style={{...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree, width:100, height:100}}>
                                {
                                    dataUser.profilePict ?
                                        <Image source={{uri: `${dataUser.profilePict}`}} style={{width: 95, height: 94, alignSelf:"center"}}></Image>
                                    :
                                        <Icon name="user" size={125} style={{alignSelf:"center", ...colorStyle.disabled}}></Icon>
                                }
                            </Col>

                            <Col style={{...spacingStyle.mlOne}}>
                                <Button rounded style={{...spacingStyle.pTwo, ...colorStyle.bgPrimary}} onPress={galleryImage}>
                                    <Icon name="image" size={20} style={{...colorStyle.light}}></Icon>
                                </Button>
                                <Button rounded style={{...spacingStyle.mtOne, ...spacingStyle.pTwo, ...colorStyle.bgPrimary}} onPress={cameraImage}>
                                    <Icon name="camera" size={20} style={{...colorStyle.light}}></Icon>
                                </Button>
                            </Col>
                        </Row>

                        <Row style={{...spacingStyle.mlOne}}>
                            <Button rounded style={{...colorStyle.bgPrimary}} onPress= {onUserLogout}>
                                <Text>
                                    Log Out
                                </Text>
                            </Button> 
                        </Row>
                    </Col>
                </Grid>


                <Form style={{...spacingStyle.mxThree, ...spacingStyle.pyThree, ...spacingStyle.myThree, ...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree}}>
                    <Item floatingLabel>
                        <Label>
                            Name
                        </Label>
                        <Input></Input>
                    </Item>
                    <Item floatingLabel style={{...spacingStyle.mtOne}}>
                        <Label>
                            Identity Number 
                        </Label>
                        <Input></Input>
                    </Item>
                    <Item floatingLabel style={{...spacingStyle.mtOne}}>
                        <Label>
                            Email
                        </Label>
                        <Input></Input>
                    </Item>
                    <Item floatingLabel style={{...spacingStyle.mtOne}}>
                        <Label>
                            Password
                        </Label>
                        <Input secureTextEntry={true}></Input>
                    </Item>
                    <Item floatingLabel style={{...spacingStyle.mtOne}}>
                        <Label>
                            Confirm Password
                        </Label>
                        <Input secureTextEntry={true}></Input>
                    </Item>
                    <Item floatingLabel style={{...spacingStyle.mtOne}}>
                        <Label>
                            Phone Number
                        </Label>
                        <Input></Input>
                    </Item>
                    <View style={{...spacingStyle.mtTwo, ...spacingStyle.mlThree}}>
                        <Textarea rowSpan={5} bordered placeholder="Address" />
                    </View>
                </Form>

                <Row style={{...spacingStyle.myThree, ...spacingStyle.mlThree}}>
                    <Col>
                        <Button rounded bordered danger style={{...colorStyle.bgLight,}}>
                            <Text style={{...colorStyle.primary}}>
                                Cancel 
                            </Text>
                        </Button>
                    </Col>

                    <Col>
                        <Button rounded style={{alignSelf: "flex-end", ...spacingStyle.mrTwo, ...colorStyle.bgPrimary}}>
                            <Text style={{...colorStyle.light}}>
                                Submit
                            </Text>
                        </Button>
                    </Col>
                </Row>
            </Content>

            
            
           
            
        </Container>
    )
}


const mapDispatchToProps = {
    onUserLogout
}


export default connect ("", mapDispatchToProps) (Profile)