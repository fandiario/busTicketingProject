import React, { useEffect, useState } from "react"
import { ToastAndroid } from "react-native"
import Axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {Picker} from '@react-native-picker/picker'
import { Container, Content, Grid, Row, H1, H2, View, Col, Text, Form, Item, Label, Input, Spinner, Button } from "native-base"

// Redux
import { connect } from "react-redux"
import { onPayment } from "../../Redux/Actions/bookingAction"
import { getUserEmail } from "../../Redux/Actions/userAction"
import { getAllDataTransaction, getTimeExpired } from "../../Redux/Actions/transactionAction"

// Moment
import Moment from "moment"
import "moment-timezone"

// urlAPI
import {urlAPI} from "../../Supports/Constants/urlAPI"

// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"

// Icon
import Icon from "react-native-vector-icons/FontAwesome"



const BookingDetail = ({navigation, navigation: {navigate}, route, onPayment, getUserEmail, getAllDataTransaction,getTimeExpired, shuttles, search, user}) => {

    const [contactInfo, setContactInfo] = useState (
        {
            idUser: null,
            emailUser: null,
            phoneUser: null,
            seats: null,
            passengers: [],
            totalPrice: null
        }
    )

    const [passengerDetail, setPassengerDetail] = useState ([])

    // const [passengeValid, setPassengerValid] = useState ([])

    // const getAsyncStorage = () => {
    //     AsyncStorage.getItem ("id")

    //     .then ((res) => {
    //         getUserData (res)
    //     })

    //     .catch ((err) => {
    //         console.log (err)
    //     })
    // }

    const getUserData = (userId) => {
        getUserEmail (userId)

        setContactInfo ({
            ...contactInfo, 
            idUser: userId, 
            emailUser: user.email, 
            seats:route.params.seats, 
            totalPrice: (route.params.price * (route.params.seats).length )
        })
    }

    const getPassengerFormat = () => {
        let bookedSeats = route.params.seats

        let newArr = []

        for (let i = 0; i < bookedSeats.length; i++) {
            newArr.push (
                {
                    numSeat: bookedSeats[i],
                    name: null,
                    age: null,
                    valid: false
                }
            )
        }

        setPassengerDetail (newArr)
    }

    const inputPassInfo = (seat, prop, input) => {
        let arrPassenger = [...passengerDetail]

        for (let i = 0; i < arrPassenger.length; i++) {
            if (arrPassenger[i].numSeat === seat) {

                if (prop === "name") {
                    arrPassenger[i].name = input
                
                } else if (prop === "age"){
                    arrPassenger[i].age = input
                }

                if ( arrPassenger[i].name && arrPassenger[i].age) {
                    arrPassenger[i].valid = true
                }

            }
            

            setPassengerDetail (arrPassenger)
            setContactInfo ({...contactInfo, passengers: passengerDetail})
        }
    }

    const proceedPayment = () => {
        let presentTime = Moment (new Date ()).utcOffset ("+07:00").format ("YYYY-MM-DD HH:mm:ss")
        let expiredAt = Moment (new Date ()).add ({minutes: 15}).utcOffset("+07:00").format ("YYYY-MM-DD HH:mm:ss")
        let validToBook = false
        let scoreValidPass = 0

        let dataToSend = {
            status: "unpaid",
            idUser: contactInfo.idUser,
            emailUser: contactInfo.emailUser,
            idShuttle: shuttles.shuttleDetail.id,
            shuttleName: shuttles.shuttleDetail.name,
            class: shuttles.shuttleDetail.class,
            from: search.departure,
            to: search.arrival,
            departureDate: search.date,
            seats: contactInfo.seats,
            passengers: contactInfo.passengers,
            totalPrice: contactInfo.totalPrice,
            contactPhone: contactInfo.phoneUser,
            timeCreated: presentTime,
            timeExpired: expiredAt,
            timePaid: null,
            timeCancelled: null
        }

        // let timeDifferences = Moment.duration (Moment(expiredAt).diff(Moment(presentTime)) )
        // let second = timeDifferences.asSeconds()

        // getTimeExpired (second)

        for (let i = 0; i < contactInfo.passengers.length; i++) {
            if (contactInfo.passengers[i].valid === true) {
                scoreValidPass += 1
            }
        }

        if (scoreValidPass === contactInfo.seats.length) {
            validToBook = true
        }

        if (validToBook === true && user.email && contactInfo.phoneUser) {
            Axios.post (urlAPI + `/transactions`, {...dataToSend})

            .then ((res) => {
                onPayment (dataToSend)
                getAllDataTransaction (contactInfo.idUser)
                navigate ("Payment", {idTransaction: res.data.id, timeExpired: expiredAt})
            })

            .catch ((err) => {
                console.log (err)
            })

        } else {
            ToastAndroid.showWithGravity (
                "You have to fill every data",
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            )
        }

    }

    useEffect (() => {
        // getAsyncStorage ()
        getPassengerFormat ()
        getUserData (route.params.userId)
        // console.log (user.email)
    }, [])

    // if (user.email === null) {
    //     return (
    //         <Container>
    //              <Grid style={{...colorStyle.bgPrimary}}>
    //                 <Row style={{...spacingStyle.myThree, ...spacingStyle.mlThree,}}>
    //                     <Icon name="arrow-circle-left" size={30} style={{...colorStyle.light, ...spacingStyle.mrTwo}} onPress={() => navigation.goBack ()}></Icon>
    //                     <H1 style={{...colorStyle.light, ...typoStyle.fsBold}}>
    //                         BusyBus
    //                     </H1>
    //                 </Row>

    //                 <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, justifyContent:"center" }}>
    //                     <H2 style={{...typoStyle.fsBold}}>
    //                         Shuttle Detail
    //                     </H2>
    //                 </View>

    //                 <Spinner style={{marginTop: 50}}></Spinner>
    //             </Grid>
    //         </Container>
    //     )
    // } 

    return (
        <Container>
            <Content>
                <Grid style={{...colorStyle.bgPrimary}}>
                    <Row style={{...spacingStyle.myThree, ...spacingStyle.mlThree,}}>
                        <Icon name="arrow-circle-left" size={30} style={{...colorStyle.light, ...spacingStyle.mrTwo}} onPress={() => navigation.goBack ()}></Icon>
                        <H1 style={{...colorStyle.light, ...typoStyle.fsBold}}>
                            BusyBus
                        </H1>
                    </Row>
                </Grid>

                <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, justifyContent:"center" }}>
                    <H2 style={{...typoStyle.fsBold}}>
                        Contact Info
                    </H2>
                </View>

                <Form style={{...spacingStyle.mtThree, ...spacingStyle.mxThree, ...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree}}>
                    <Item stackedLabel>
                        <Label style={{...typoStyle.fsBold}}>
                            Email:
                        </Label>

                        <Input defaultValue={user.email} onChangeText={(input) => setContactInfo ({...contactInfo, emailUser: input})}>
                        </Input>
                    </Item>

                    <Item stackedLabel>
                        <Label style={{...typoStyle.fsBold}}>
                            Phone Number:
                        </Label>

                        <Input onChangeText={(input) => setContactInfo ({...contactInfo, phoneUser: input})}>
                        </Input>
                    </Item>
                </Form>

                <View style={{...spacingStyle.mtEight, ...spacingStyle.mlThree, justifyContent:"center" }}>
                    <H2 style={{...typoStyle.fsBold}}>
                        Passenger's Info
                    </H2>
                </View>

                {
                    route.params.seats.map ((el, i) => {
                        return (
                            <Form key={i} style={{...spacingStyle.mtThree, ...spacingStyle.mxThree, ...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree}}>
                                <Item stackedLabel>
                                    <Row style={{ ...spacingStyle.mtTwo}}>
                                        <Col style={{flex: 2}}>
                                            <Text style={{...typoStyle.fsBold}}>
                                                Seat : {el}
                                            </Text>
                                        </Col>
                                    </Row>
                                    
                                    <Label style={{...typoStyle.fsBold}}>
                                        Name :
                                    </Label>
            
                                    <Input onChangeText={(input) => inputPassInfo (el, "name", input)}>
                                    </Input>

                                    <Label style={{...typoStyle.fsBold}}>
                                        Age :
                                    </Label>
            
                                    <Input onChangeText={(input) => inputPassInfo (el, "age", input)}>
                                    </Input>

                                </Item>
                            </Form>
                        )
                    })
                }

                {/* <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, justifyContent:"center" }}>
                    <Button onPress={() => console.log (passengerDetail)}>
                        <Text>
                            Try Me (Passenger)
                        </Text>
                    </Button>
                </View> */}

                {/* <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, alignSelf:"center" }}>
                    <Button onPress={() => console.log (contactInfo)}>
                        <Text>
                            Try Me 
                        </Text>
                    </Button>
                </View> */}

                <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, alignSelf:"center" }}>
                    <Button rounded style={{...colorStyle.bgPrimary}} onPress={proceedPayment}>
                        <Text>
                            Payment
                        </Text>
                    </Button>
                </View>

            </Content>
        </Container>
    )

    
}

const mapDispatchToProps = {
    onPayment, 
    getUserEmail, 
    getAllDataTransaction,
    getTimeExpired
}

const mapStateToProps = (state) => {
    return {
        search: state.search,
        shuttles: state.shuttles,
        user: state.user
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (BookingDetail)

// export default BookingDetail