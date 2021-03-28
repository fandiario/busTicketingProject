import React, { useEffect, useState } from "react"
import Axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {Picker} from '@react-native-picker/picker'
import { Container, Content, Grid, Row, H1, H2, View, Col, Text, Form, Item, Label, Input, Spinner, Button } from "native-base"

// Redux
import { connect } from "react-redux"
import { onPayment } from "../../Redux/Actions/bookingAction"

// urlAPI
import {urlAPI} from "../../Supports/Constants/urlAPI"

// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"

// Icon
import Icon from "react-native-vector-icons/FontAwesome"

const BookingDetail = ({navigation, route, onPayment, shuttles, search}) => {

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

    // const [bookedSeats, setBookedSeats] = useState ([])

    const [passengerDetail, setPassengerDetail] = useState (
        {   
            numSeat: null,
            name: null,
            age: null
        }
    )

    const getAsyncStorage = () => {
        AsyncStorage.getItem ("id")

        .then ((res) => {
            getUserData (res)
            
        })

        .catch ((err) => {
            console.log (err)
        })
    }

    const getUserData = (userId) => {
        Axios.get (urlAPI + `/users/${userId}`)

        .then ((res) => {
            console.log (res.data)
            setContactInfo ({
                ...contactInfo, 
                idUser: res.data.id, 
                emailUser: res.data.email, 
                seats:route.params.seats, 
                totalPrice: (route.params.price * (route.params.seats).length )
            })
        })

        .catch ((err) => {
            console.log (err)
        })
    }

    const inputPassInfo = (seat, prop, input) => {
        let arr = [...contactInfo.passengers]

        console.log (`seat = ${seat}`)

        // if (seat !== passengerDetail.numSeat) {
        //     setPassengerDetail ({numSeat: null, name: null, age: null})
        // }
        
        if (prop === "name") {
            setPassengerDetail ({...passengerDetail, numSeat: seat, name: input})

            // console.log ("name")
            console.log (passengerDetail)
        } 
        
        if (prop === "age") {
            setPassengerDetail ({...passengerDetail, age: input})

            // console.log ("age")
            console.log (passengerDetail)
        }

        if (passengerDetail.seat !== null && passengerDetail.name !== null  && passengerDetail.age !== null) {
            arr.push ({...passengerDetail})
            setContactInfo ({...contactInfo, passengers: arr})
            setPassengerDetail ({numSeat: null, name: null, age: null})
        }       
    }

    const proceedPayment = () => {
        let dataToSend = {
            status: "unpaid",
            idUser: contactInfo.idUser,
            idShuttle: null,
            shuttleName: null,
            class: null,
            from: search.departure,
            to: search.arrival,
            departureDate: search.date,
            seats: contactInfo.seats,
            passengers: contactInfo.passengers,
            totalPrice: contactInfo.totalPrice,
            contactPhone: contactInfo.phoneUser
        }

        onPayment (dataToSend)


    }

    // const confirmPassenger = () => {
    //     console.log (passengerDetail)
    // }

    // const loopPicker = () => {
    //     for (let i = 1; i <= 100; i++){
    //         return (
    //             <Picker.Item label={i} value={i} />
    //         )
    //     }
    // }

    useEffect (() => {
        getAsyncStorage ()
    }, [])

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

                        <Input defaultValue={contactInfo.emailUser} onChangeText={(input) => setContactInfo ({...contactInfo, emailUser: input})}>
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
                                    <Row style={{...spacingStyle.mlFour, ...spacingStyle.mtTwo}}>
                                        <Col style={{flex: 2}}>
                                            <Text style={{...typoStyle.fsBold}}>
                                                Seat : {el}
                                            </Text>
                                        </Col>

                                        <Col style={{flex: 1}}>
                                            {/* <Button rounded style={{height: 30, ...colorStyle.bgPrimary}} onPress={() => setPassengerDetail ({numSeat: null, name: null, age: null})}>
                                                <Text>
                                                    Confirm 
                                                </Text>
                                            </Button> */}
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
            
                                    {/* <Input onChangeText={(input) => inputPassInfo (el, "age", input)}>
                                    </Input> */}

                                    <Picker
                                        selectedValue="-Choose-"
                                        style={{ height: 50, width: 150, alignSelf:"flex-start"}}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setPassengerDetail ({...passengerDetail, age: itemValue})
                                        }>
                                        <Picker.Item label="-Choose-" value="-Choose-" />

                                        {/* {loopPicker ()} */}

                                        <Picker.Item label="1" value={1} />
                                        <Picker.Item label="2" value={2} />
                                        <Picker.Item label="3" value={3} />
                                        <Picker.Item label="4" value={4} />
                                        <Picker.Item label="5" value={5} />
                                        <Picker.Item label="6" value={6} />
                                        <Picker.Item label="7" value={7} />
                                        <Picker.Item label="8" value={8} />
                                        <Picker.Item label="9" value={9} />
                                        <Picker.Item label="10" value={10}/>

                                        <Picker.Item label="11" value={11} />
                                        <Picker.Item label="12" value={12} />
                                        <Picker.Item label="13" value={13} />
                                        <Picker.Item label="14" value={14} />
                                        <Picker.Item label="15" value={15} />
                                        <Picker.Item label="16" value={16} />
                                        <Picker.Item label="17" value={17} />
                                        <Picker.Item label="18" value={18} />
                                        <Picker.Item label="19" value={19} />
                                        <Picker.Item label="20" value={20}/>

                                        <Picker.Item label="21" value={21} />
                                        <Picker.Item label="22" value={22} />
                                        <Picker.Item label="23" value={23} />
                                        <Picker.Item label="24" value={24} />
                                        <Picker.Item label="25" value={25} />
                                        <Picker.Item label="26" value={26} />
                                        <Picker.Item label="27" value={27} />
                                        <Picker.Item label="28" value={28} />
                                        <Picker.Item label="29" value={29} />
                                        <Picker.Item label="30" value={30}/>

                                        <Picker.Item label="31" value={31} />
                                        <Picker.Item label="32" value={32} />
                                        <Picker.Item label="33" value={33} />
                                        <Picker.Item label="34" value={34} />
                                        <Picker.Item label="35" value={35} />
                                        <Picker.Item label="36" value={36} />
                                        <Picker.Item label="37" value={37} />
                                        <Picker.Item label="38" value={38} />
                                        <Picker.Item label="39" value={39} />
                                        <Picker.Item label="40" value={40}/>

                                        <Picker.Item label="41" value={41} />
                                        <Picker.Item label="42" value={42} />
                                        <Picker.Item label="43" value={43} />
                                        <Picker.Item label="44" value={44} />
                                        <Picker.Item label="45" value={45} />
                                        <Picker.Item label="46" value={46} />
                                        <Picker.Item label="47" value={47} />
                                        <Picker.Item label="48" value={48} />
                                        <Picker.Item label="49" value={49} />
                                        <Picker.Item label="50" value={50}/>

                                        <Picker.Item label="51" value={51} />
                                        <Picker.Item label="52" value={52} />
                                        <Picker.Item label="53" value={53} />
                                        <Picker.Item label="54" value={54} />
                                        <Picker.Item label="55" value={55} />
                                        <Picker.Item label="56" value={56} />
                                        <Picker.Item label="57" value={57} />
                                        <Picker.Item label="58" value={58} />
                                        <Picker.Item label="59" value={59} />
                                        <Picker.Item label="60" value={60}/>

                                        <Picker.Item label="61" value={61} />
                                        <Picker.Item label="62" value={62} />
                                        <Picker.Item label="63" value={63} />
                                        <Picker.Item label="64" value={64} />
                                        <Picker.Item label="65" value={65} />
                                        <Picker.Item label="66" value={66} />
                                        <Picker.Item label="67" value={67} />
                                        <Picker.Item label="68" value={68} />
                                        <Picker.Item label="69" value={69} />
                                        <Picker.Item label="70" value={70}/>

                                        <Picker.Item label="71" value={71} />
                                        <Picker.Item label="72" value={72} />
                                        <Picker.Item label="73" value={73} />
                                        <Picker.Item label="74" value={74} />
                                        <Picker.Item label="75" value={75} />
                                        <Picker.Item label="76" value={76} />
                                        <Picker.Item label="77" value={77} />
                                        <Picker.Item label="78" value={78} />
                                        <Picker.Item label="79" value={79} />
                                        <Picker.Item label="80" value={80}/>

                                        <Picker.Item label="81" value={81} />
                                        <Picker.Item label="82" value={82} />
                                        <Picker.Item label="83" value={83} />
                                        <Picker.Item label="84" value={84} />
                                        <Picker.Item label="85" value={85} />
                                        <Picker.Item label="86" value={86} />
                                        <Picker.Item label="87" value={87} />
                                        <Picker.Item label="88" value={88} />
                                        <Picker.Item label="89" value={89} />
                                        <Picker.Item label="90" value={90}/>

                                        <Picker.Item label="91" value={91} />
                                        <Picker.Item label="92" value={92} />
                                        <Picker.Item label="93" value={93} />
                                        <Picker.Item label="94" value={94} />
                                        <Picker.Item label="95" value={95} />
                                        <Picker.Item label="96" value={96} />
                                        <Picker.Item label="97" value={97} />
                                        <Picker.Item label="98" value={98} />
                                        <Picker.Item label="99" value={99} />
                                        <Picker.Item label="100" value={100}/>

                                    </Picker>
                                </Item>
                            </Form>
                        )
                    })
                }

                {/* {
                    route.params.seats.map ((el, i) => {
                        return (
                            <Form key={i} style={{...spacingStyle.mtThree, ...spacingStyle.mxThree, ...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree}}>
                                <Row style={{...spacingStyle.mlFour, ...spacingStyle.mtTwo}}>
                                    <Col style={{flex: 2}}>
                                        <Text style={{...typoStyle.fsBold}}>
                                            Seat : {el}
                                        </Text>
                                    </Col>

                                    <Col style={{flex: 1}}>
                                        <Button rounded style={{height: 30, ...colorStyle.bgPrimary}} onPress={() => confirmPassenger ()}>
                                            <Text>
                                                Confirm 
                                            </Text>
                                        </Button>
                                    </Col>
                                </Row>

                                <Item stackedLabel>
                                    <Label style={{...typoStyle.fsBold}}>
                                        Name :
                                    </Label>
            
                                    <Input 
                                        ref={input => {
                                            setPassengerDetail ({...passengerDetail, seat: el ,name: input})
                                        }}>
                                    </Input>

                                    <Label style={{...typoStyle.fsBold}}>
                                        Age :
                                    </Label>
            
                                    <Input 
                                        ref={input => {
                                            setPassengerDetail ({...passengerDetail, age: input})
                                        }}>
                                    </Input>
                                </Item>
                            </Form>
                        )
                    })
                } */}

                {/* <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, justifyContent:"center" }}>
                    <Button onPress={() => console.log (passengerDetail)}>
                        <Text>
                            Try Me (Passenger)
                        </Text>
                    </Button>
                </View> */}

                <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, alignSelf:"center" }}>
                    <Button onPress={() => console.log (contactInfo)}>
                        <Text>
                            Try Me 
                        </Text>
                    </Button>
                </View>

                <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, alignSelf:"center" }}>
                    <Button rounded style={{...colorStyle.bgPrimary}}>
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
    onPayment
}

const mapStateToProps = (state) => {
    return {
        search: state.search,
        shuttles: state.shuttles
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (BookingDetail)

// export default BookingDetail