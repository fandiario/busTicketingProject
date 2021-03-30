import React, { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { connect } from "react-redux"
import { Container, Col, Content, Grid, H1, H2, Row, Spinner, Text, View, Button, Toast, Footer } from "native-base"
import { Image, ToastAndroid, TouchableOpacity } from "react-native"

// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"

// Redux
import {getShuttleDetail, getBookedSeat} from "../../Redux/Actions/shuttleAction"

// Icon
import Icon from "react-native-vector-icons/FontAwesome"

const ShuttleDetail = ({navigation: {navigate}, navigation, route, getShuttleDetail, getBookedSeat, shuttles, search}) => {

    const [inputBookingSeat, setBookingSeat] = useState ([]) 
    const [idUser, setIdUser] = useState (null)

    const setSeatBooking = (input, lim) => {

        if (inputBookingSeat.length < lim) {
            setBookingSeat([...inputBookingSeat, input])
            
        } else {

            // Toast.show ({
            //     text: "You have meet your maximum seat reservation",
            //     buttonText: "Ok",
            //     position: "bottom",
            //     duration: 3000

            // })

            ToastAndroid.showWithGravity (
                "You have meet your maximum seat reservation",
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            )
        }
       
    }

    const removeSeatBooking = (input) => {
        let index = inputBookingSeat.indexOf (input)
        let arrSeats = [...inputBookingSeat]

        if (index !== -1) {
            arrSeats.splice (index, 1)
            setBookingSeat (arrSeats)
        }
    }

    const resetSeatBooking = () => {
        setBookingSeat ([])
    }

    const proceedBooking = () => {
        navigate ("BookingDetail", {seats: inputBookingSeat, price: shuttles.shuttleDetail.price, userId: idUser})
    }

    const getAsyncStorage = () => {
        AsyncStorage.getItem ("id")

        .then ((res) => {
            setIdUser (res)
        })

        .catch ((err) => {
            console.log (err)
        })
    }

    useEffect (() => {
        let idShuttle = route.params.id
        let departureDate = search.date

        getShuttleDetail (idShuttle)
        getBookedSeat (idShuttle, departureDate)
        getAsyncStorage ()
        
    }, [])


    if (shuttles.shuttleDetail === null || shuttles.seatBooked === null || inputBookingSeat === null || shuttles.shuttleDetail.price === null) {
        return (
            <Container>
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
                        Shuttle Detail
                    </H2>
                </View>

                <Spinner style={{marginTop: 50}}></Spinner>
            </Container>
        )
    }

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
                        Shuttle Detail
                    </H2>
                </View>

                <View style={{...spacingStyle.mtThree, ...spacingStyle.mxThree, ...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree}}>
                    
                    <Row style={{...spacingStyle.mtThree, ...spacingStyle.mxTwo}}>
                        <Col>
                            <Text style={{...typoStyle.fsBold, ...typoStyle.fsSix}}>
                                { shuttles.shuttleDetail.type } { shuttles.shuttleDetail.name }
                            </Text>
                            <Text style={{...typoStyle.fsBold, ...typoStyle.fsSix}}>
                                { shuttles.shuttleDetail.class } Class
                            </Text>
                        </Col>
    
                    </Row>
                    
                    
                    <Row style={{...spacingStyle.mxTwo, ...spacingStyle.myThree}}>
                        <Image source={{uri: shuttles.shuttleDetail.image1  }} style={{height: 150, width: "auto", flex: 1}}></Image>
                    </Row>

                    <Row>
                        <Col style={{flex: 1, ...spacingStyle.mlTwo, ...spacingStyle.myThree}}>
                            <Image source={{uri: shuttles.shuttleDetail.image2 }} style={{height: 100, width: "auto", flex: 1}}></Image>
                        </Col>

                        <Col style={{flex: 1, ...spacingStyle.mxTwo, ...spacingStyle.myThree}}>
                            <Image source={{uri: shuttles.shuttleDetail.image3 }} style={{height: 100, width: "auto", flex: 1}}></Image>
                        </Col>
                    </Row>

                    <Row style={{...spacingStyle.mtThree, ...spacingStyle.mxTwo}}>
                        <Col>
                            <Text style={{...typoStyle.fsBold, ...typoStyle.fsSix}}>
                                From : {shuttles.shuttleDetail.from} {shuttles.shuttleDetail.timeDeparture}
                            </Text>
                        </Col>

                        <Col>
                            <Text style={{...typoStyle.fsBold, ...typoStyle.fsSix}}>
                                To: {shuttles.shuttleDetail.to} {shuttles.shuttleDetail.timeArrival}
                            </Text>
                        </Col>
    
                    </Row>

                    <Row style={{...spacingStyle.mtThree, ...spacingStyle.mxTwo}}>
                        
                        <Text style={{...typoStyle.fsItalic}}>
                            {shuttles.shuttleDetail.travelTime}
                        </Text>
        
                    </Row>

                    <Row style={{...spacingStyle.mtThree, ...spacingStyle.mxTwo}}>
                        
                        <Text style={{...typoStyle.fsBold, ...typoStyle.fsFive}}>
                           Price : Rp. {shuttles.shuttleDetail.price} / seat
                        </Text>
        
                    </Row>

                    <Row style={{...spacingStyle.mtThree, ...spacingStyle.mxTwo}}>
                        
                        <Col style={{flex: 1}}>
                            <Text style={{...typoStyle.fsBold}}>
                                Facility :
                            </Text>
                        </Col>

                        <Col style={{flex: 4}}>
                        
                            {
                                shuttles.shuttleDetail.facility.map ((el, i) => {
                                    return (
                                        <Text key={i}>
                                            {el}
                                        </Text>
                                    )
                                })
                            }
                        
                        </Col>
        
                    </Row>

                    {/* <Row>
                        <Button onPress={() => console.log (shuttles.shuttleDetail)}>
                            <Text>
                                Test
                            </Text>
                        </Button>
                    </Row> */}

                    <Row style={{...spacingStyle.mtThree, ...spacingStyle.mxTwo}}>
                        
                        <Col style={{flex: 7}}>
                            <Text style={{...typoStyle.fsBold}}>
                                Available Seat: 
                            </Text>
                        </Col>

                        <Col style={{flex: 3}}>
                            <Button rounded style={{...colorStyle.bgPrimary,alignSelf:"flex-end", height: 25}} onPress={resetSeatBooking}>
                                <Text style={{...colorStyle.light, ...typoStyle.fsOne}}>
                                    Reset 
                                </Text>
                            </Button>
                        </Col>
        
                    </Row>

                    <Row style={{...spacingStyle.mtThree, ...spacingStyle.mxFive, ...spacingStyle.pxFive, ...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree}}>
                        <Col style={{justifyContent: "center", alignItems:"center"}}>
                            <Icon name="arrow-up" size={15}></Icon>
                            <Text>
                                Front
                            </Text>
                        </Col>
                    </Row>



                    <Grid style={{...spacingStyle.mtOne, ...spacingStyle.mxFive, ...spacingStyle.pxFive, ...spacingStyle.pyFive, flexWrap: "wrap", ...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree}}>

                        {
                            shuttles.shuttleDetail.seat.map ((el, i) => {
                                return (
                                    <Col key={i} style={{width: '25%', alignItems: 'center', ...spacingStyle.mbTwo}}>
                                        
                                        {
                                            shuttles.seatBooked.includes (el) ?

                                                <View style={{justifyContent: "center", alignItems:"center"}}>
                                                    <Icon name="times" size={15} style={{...spacingStyle.mOne}}></Icon>
                                                    <Text>
                                                        Booked
                                                    </Text>

                                                </View>
                                            :

                                                inputBookingSeat.includes (el) ?

                                                    <Button style={{...colorStyle.bgDisabled}} onPress={() => removeSeatBooking (el)}>
                                                        <Text style={{...colorStyle.light}}>
                                                            {el}
                                                        </Text>
                                                    </Button>

                                                :

                                                    <Button transparent onPress={() => setSeatBooking (el, search.seat)}>
                                                        <Text style={{...colorStyle.dark}}>
                                                            {el}
                                                        </Text>
                                                    </Button>
                                        }
                                    </Col>
                                )
                            })
                        }
                    </Grid>       

                    {
                        inputBookingSeat[0]?

                            <Row style={{...spacingStyle.myThree, ...spacingStyle.mlThree}}>

                                <Row>
                                    
                                    <Text style={{...typoStyle.fsBold, ...spacingStyle.mrTwo}}>
                                        Booking Seat : 
                                    </Text>
                               
                                    {inputBookingSeat.map ((el, i ) => {
                                        return (
                                            <Text key={i} style={{...spacingStyle.mrTwo}}>
                                                {el}
                                            </Text>
                                        )
                                    })}
                                </Row>

                            </Row>

                        :

                            null

                    }         

                </View>

                {
                    inputBookingSeat[0]?
                        <View>
                            <Row style={{...colorStyle.bgPrimary, ...spacingStyle.mtThree, alignItems:"center"}}>
                                <Col style={{...spacingStyle.mlThree}} flex={2}>
                                    <Text style={{...colorStyle.light, ...typoStyle.fsBold}}>
                                        Total: Rp. {inputBookingSeat.length * shuttles.shuttleDetail.price}
                                    </Text>
                                </Col>

                                <Col flex={1}>
                                    <Button style={{...colorStyle.bgSecondary}} onPress ={() => {proceedBooking ()}}>
                                        <Text>
                                            Proceed
                                        </Text>
                                        <Icon name="arrow-right" size={20} style={{...colorStyle.light, ...spacingStyle.mrFour}}></Icon>
                                    </Button>
                                </Col>
                            </Row>

                        </View>
                        
                    :
                        null
                }

            </Content>

        </Container>
    )
}

const mapDispatchToProps = {
    getShuttleDetail, getBookedSeat, 
}

const mapStateToProps = (state) => {
    return {
        shuttles: state.shuttles,
        search: state.search
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (ShuttleDetail)

// export default ShuttleDetail
