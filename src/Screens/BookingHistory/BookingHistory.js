import React, { useEffect, useState } from "react"
import Axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ToastAndroid } from "react-native"
import { Container, Content, Header, Text, Row, H1, H2, View, Col, Spinner, Button } from "native-base"

// Redux
import { connect } from "react-redux"
import {  getDataTransaction, getAllDataTransaction } from "../../Redux/Actions/transactionAction"

// Momen
import Moment from "moment"
import "moment-timezone"
import CountDown from "react-native-countdown-component"

// urlAPI
import { urlAPI } from "../../Supports/Constants/urlAPI"

// Icon
import Icon from "react-native-vector-icons/FontAwesome"

// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"


const BookingHistory = ({navigation: {navigate},  getDataTransaction, getAllDataTransaction, transactions, user}) => {
    useEffect (() => {
        getAllDataTransaction (user.id)

        // if (transactions.dataAllTransaction !== null) {
        //     getFormatTime ()
        // }

    }, [])

    // const [countExpired, setCountExpired] = useState ([])

    // const getFormatTime = () => {
    //     let arrTimeFormat = [...countExpired]

        
    //     for (let i = 0; i < transactions.dataAllTransaction.length; i++) {
    //         arrTimeFormat.push ({
    //             idTransaction : null,
    //             statusTransaction: null,
    //             presentTime: null,
    //             expiredAt: null,
    //             secondsLeft: null
    //         })
    //     }

    //     setCountExpired (arrTimeFormat), () => {
    //         console.log (countExpired)
    //     }

    //     expiredTransaction ()
        
    // }

    // const expiredTransaction = () => {
    //     let arrTimeFormat = [...countExpired]
          
    //     for (let j = 0; j < transactions.dataAllTransaction.length; j++) {
    //         arrTimeFormat[j].idTransaction = transactions.dataAllTransaction[j].id
    //         arrTimeFormat[j].statusTransaction = transactions.dataAllTransaction[j].status

    //         let present = Moment (new Date ()).utcOffset ("+07:00").format ("YYYY-MM-DD HH:mm:ss")
    //         arrTimeFormat[j].presentTime = present

    //         let expired = transactions.dataAllTransaction[j].timeExpired
    //         arrTimeFormat[j].expiredAt = expired

    //         let timeDifferences = Moment.duration (Moment(expired).diff(Moment(present)) )
    //         let second = timeDifferences.asSeconds()
    //         arrTimeFormat[j].secondsLeft = second
    //     }

    //     setCountExpired (arrTimeFormat), () => {
    //         console.log (countExpired)
    //     }
    // }

    // const onCancelled = (input) => {
    //     let idTransaction = input
    //     let presentTime = Moment (new Date ()).utcOffset ("+07:00").format ("YYYY-MM-DD HH:mm:ss")
        
    //     Axios.patch (urlAPI + `/transactions/${idTransaction}`, {status: "cancelled", timeExpired: null, timeCancelled: presentTime})

    //     .then ((res) => {
    //         ToastAndroid.showWithGravity (
    //             "Your booking order has been cancelled. Thank you for your patronage",
    //             ToastAndroid.LONG,
    //             ToastAndroid.CENTER
    //         )
    //         getAllDataTransaction (user.id)
    //     })

    //     .catch ((err) => {
    //         console.log (err)
    //     })
    // }

    if (transactions.dataAllTransaction === null) {
        return (
            <Container>

                <Header style={{...colorStyle.bgPrimary}}>
                    <Row style={{...spacingStyle.myThree,}}>
                        <H1 style={{...colorStyle.light, ...typoStyle.fsBold}}>
                            BusyBus
                        </H1>
                    </Row>
                </Header>

                <Content style={{...spacingStyle.mxThree}}>

                <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, justifyContent:"center" }}>
                    <H2 style={{...typoStyle.fsBold}}>
                        Booking History : Your Transaction History is Empty
                    </H2>
                </View>
    
                </Content>

            </Container>
        )
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
            <Content style={{...spacingStyle.mxThree}}>
                <View style={{...spacingStyle.mtThree, justifyContent:"center" }}>
                    <H2 style={{...typoStyle.fsBold}}>
                        Booking History
                    </H2>
                </View>

                {
                    transactions.dataAllTransaction.map ((el, i) => {
                        return (
                            <Col key={i} style={{...spacingStyle.mtThree, ...spacingStyle.myThree, ...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree}}>
                                <Row style={{...spacingStyle.pbOne, justifyContent: "space-between", ...colorStyle.bgPrimary}}>
                                    <Text style={{...typoStyle.fsThree, ...colorStyle.light, ...spacingStyle.pxThree}}>
                                        Departure Date : {el.departureDate}
                                    </Text>

                                    <Text style={{...typoStyle.fsThree, ...colorStyle.light, ...spacingStyle.pxThree}}>
                                        Status: {el.status}
                                    </Text>
                                </Row>

                                {/* {
                                    countExpired[0] === null ?

                                        null
                                    :
                                        
                                        el.status === "unpaid" ?
    
                                            <Row style={{...spacingStyle.mxThree, ...spacingStyle.mTOne}}>
                                                <Row style={{...spacingStyle.ptOne, justifyContent:"center", }}>
                                                    <Icon name="hourglass" size={33} style={{...colorStyle.primary, ...spacingStyle.mrOne, ...spacingStyle.mtOne}}></Icon>
                                                    <CountDown
                                                        until={countExpired[i].secondsLeft}
                                                        onFinish={() => onCancelled (el.id)}
                                                        onPress={() => alert ("Please finish your transaction")}
                                                        digitStyle={{...colorStyle.bgPrimary}}
                                                        digitTxtStyle={{...colorStyle.light}}
                                                        timeLabels={{m: "minute", s: "second"}}
                                                        timeToShow={["M", "S"]}
                                                        size={15}
                                                    ></CountDown>
                                                </Row>
                                            </Row>
                                        :
                                        
                                            null
                                        
                                } */}
                                
                                
                                <Row style={{justifyContent: "space-between", ...spacingStyle.mxThree, ...spacingStyle.mTOne}}>
                                    <Text style={{...typoStyle.fsBold, ...typoStyle.fsSix}}>
                                        From : {el.from}
                                    </Text>
                                    <Icon name="arrow-right" size={20}></Icon>
                                    <Text style={{...typoStyle.fsBold, ...typoStyle.fsSix}}>
                                        To : {el.to}
                                    </Text>
                                </Row>

                                <Row style={{...spacingStyle.mxThree, ...spacingStyle.myThree, justifyContent: "space-between"}}>
                                    <Text style={{...typoStyle.fsBold, ...typoStyle.fsSix}}>
                                        Total : Rp. {el.totalPrice}
                                    </Text>

                                    {
                                        el.status === "unpaid" ?
                                            <Button rounded style={{height: 30, ...colorStyle.bgPrimary}} onPress={() => navigate ("Payment", {idTransaction: el.id, timeExpired: transactions.timeExpired})}>
                                                <Text style={{...typoStyle.fsTwo}}>
                                                    Pay Now ?
                                                </Text>
                                            </Button>
                                        :
                                        <Button rounded style={{height: 30, ...colorStyle.bgPrimary}} onPress={() => navigate ("Payment", {idTransaction: el.id})}>
                                            <Text style={{...typoStyle.fsTwo}}>
                                                Detail
                                            </Text>
                                        </Button>
                                    }
                                    
                                </Row>
                            </Col>
                        )
                    })
                }

               


            </Content>

            {/* {
                <Button onPress={() => console.log (countExpired)}>
                    <Text>
                        Try Me
                    </Text>
                </Button>
            } */}
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions,
        user: state.user
    }
}

const mapDispatchToProps = {
    getAllDataTransaction
}

export default connect (mapStateToProps, mapDispatchToProps) (BookingHistory)