import React, { useEffect, useState } from "react"
import Axios from "axios"
import { ToastAndroid } from "react-native"
import { Container, Content, H1, Row, Grid, View, H2, Text, Col, Button, Spinner, Accordion} from "native-base"

// Redux
import { connect } from "react-redux"
import { getDataTransaction } from "../../Redux/Actions/transactionAction"

// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"

// Icon
import Icon from "react-native-vector-icons/FontAwesome"

// Accordion
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native'

// Momen
import Moment from "moment"
import "moment-timezone"
import CountDown from "react-native-countdown-component"

// urlAPI
import { urlAPI } from "../../Supports/Constants/urlAPI"


const Payment = ({navigation, route, getDataTransaction, transactions}) => {

    useEffect (() => {
        getDataTransaction (route.params.idTransaction)
    })

    const [countExpired, setCountExpired] = useState (null)

    const expireTransaction = () => {
        let expiredAt = transactions.dataTransaction.timeExpired
        let presentTime = Moment (new Date ()).utcOffset ("+07:00").format ("YYYY-MM-DD HH:mm:ss")

        let timeDifferences = Moment.duration (Moment(expiredAt).diff(Moment(presentTime)) )
        let second = timeDifferences.asSeconds()

        setCountExpired (second)
    }

    const onCancelled = () => {
        let idTransaction = route.params.idTransaction
        let presentTime = Moment (new Date ()).utcOffset ("+07:00").format ("YYYY-MM-DD HH:mm:ss")
        
        Axios.patch (urlAPI + `/transactions/${idTransaction}`, {status: "cancelled", timeExpired: null, timeCancelled: presentTime})

        .then ((res) => {
            ToastAndroid.showWithGravity (
                "Your booking order has been cancelled. Thank you for your patronage",
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            )
            getDataTransaction (route.params.idTransaction)
        })

        .catch ((err) => {
            console.log (err)
        })

    }

    const onPaid = () => {
        let idTransaction = route.params.idTransaction
        let presentTime = Moment (new Date ()).utcOffset ("+07:00").format ("YYYY-MM-DD HH:mm:ss")
        
        Axios.patch (urlAPI + `/transactions/${idTransaction}`, {status: "paid", timeExpired: null, timePaid: presentTime})

        .then ((res) => {
            ToastAndroid.showWithGravity (
                "Your payment has been accepted. Thank you for your patronage",
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            )
            getDataTransaction (route.params.idTransaction)
        })

        .catch ((err) => {
            console.log (err)
        })
    }

    

    // const dataArray = [
    //     { title: "Detail", content: "Lorem ipsum dolor sit amet"}
    // ]

    if (transactions.dataTransaction === null) {
        return (
            <Container>
                <Content>
                    <Grid style={{...colorStyle.bgPrimary}}>
                        <Row style={{...spacingStyle.myThree, ...spacingStyle.mlThree,}}>
                            {/* <Icon name="arrow-circle-left" size={30} style={{...colorStyle.light, ...spacingStyle.mrTwo}} onPress={() => navigation.goBack ()}></Icon> */}
                            <H1 style={{...colorStyle.light, ...typoStyle.fsBold}}>
                                BusyBus
                            </H1>
                        </Row>
                    </Grid>

                    <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, justifyContent:"center" }}>
                        <H2 style={{...typoStyle.fsBold}}>
                            Payment Info
                        </H2>
                    </View>

                    <Spinner style={{marginTop: 50}}></Spinner>
                    
                </Content>
            </Container>
        )
    }

    return (
        <Container>
            <Content>
                <Grid style={{...colorStyle.bgPrimary}}>
                    <Row style={{...spacingStyle.myThree, ...spacingStyle.mlThree,}}>
                        {/* <Icon name="arrow-circle-left" size={30} style={{...colorStyle.light, ...spacingStyle.mrTwo}} onPress={() => navigation.goBack ()}></Icon> */}
                        <H1 style={{...colorStyle.light, ...typoStyle.fsBold}}>
                            BusyBus
                        </H1>
                    </Row>
                </Grid>

                <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, justifyContent:"center" }}>
                    <H2 style={{...typoStyle.fsBold}}>
                        Transaction Expired At :
                    </H2>
                </View>

                <Row style={{...spacingStyle.mtThree, ...spacingStyle.pyTwo, ...spacingStyle.mxThree, justifyContent:"center", ...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree }}>
                    {
                        transactions.dataTransaction.status === "unpaid" ?

                            <CountDown
                                until={countExpired? countExpired : 900}
                                onFinish={() => onCancelled ()}
                                onPress={() => alert ("Please finish your transaction")}
                                timeLabels={{m: "minute", s: "second"}}
                                timeToShow={["M", "S"]}
                                size={25}
                            ></CountDown>
                        :
                            transactions.dataTransaction.status === "cancelled" ?
                                <Text style={{...typoStyle.fsItalic}}>Transaction has been cancelled</Text>
                            :
                                <Text style={{...typoStyle.fsItalic}}>Transaction has been paid</Text>
                    }
                </Row>

                <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, justifyContent:"center" }}>
                    <H2 style={{...typoStyle.fsBold}}>
                        Payment Info
                    </H2>
                </View>

                <View style={{...spacingStyle.mtThree, ...spacingStyle.mxThree, ...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree}}>
                    
                    <Row style={{...spacingStyle.mxTwo}}>
                        <Row>
                            <Text>
                                Date :
                            </Text>
                            <Text>
                                {transactions.dataTransaction.departureDate}
                            </Text>
                        </Row>

                        <Row>
                            {
                                transactions.dataTransaction.status === "unpaid" ?
                                    
                                    <Row style={{justifyContent: "flex-end"}}>
                                        <Text style={{textAlign:"right"}}>
                                            Status :
                                        </Text>
                                        <Text style={{...spacingStyle.mlOne, textAlign:"right"}}>
                                            {transactions.dataTransaction.status}
                                        </Text>
                                    </Row>
                                :
                                    transactions.dataTransaction.status === "paid" ?

                                        <Row style={{justifyContent: "flex-end"}}>
                                            <Text style={{textAlign:"right"}}>
                                                Status :
                                            </Text>
                                            <Text style={{...spacingStyle.mlOne, textAlign:"right"}}>
                                                {transactions.dataTransaction.status}
                                            </Text>
                                        </Row>
                                    :

                                        <Row style={{justifyContent: "flex-end"}}>
                                            <Text style={{textAlign:"right"}}>
                                                Status :
                                            </Text>
                                            <Text style={{...spacingStyle.mlOne, textAlign:"right"}}>
                                                {transactions.dataTransaction.status}
                                            </Text>
                                        </Row>
                            }
                        </Row>
                    </Row>
                    
                    
                    <Row style={{...spacingStyle.mxTwo}}>
                        <Row>
                            <Text style={{...typoStyle.fsBold, ...typoStyle.fsFive}}>
                                From : 
                            </Text>
                            <Text style={{...typoStyle.fsBold, ...typoStyle.fsFive, ...spacingStyle.mlOne}}>
                                {transactions.dataTransaction.from}
                            </Text>
                        </Row>

                        <Col style={{alignItems:"center"}}>
                            <Icon name="arrow-right" size={20}></Icon>
                        </Col>

                        <Row style={{alignItems:"flex-end"}}>
                            <Text style={{...typoStyle.fsBold, ...typoStyle.fsFive}}>
                                To : 
                            </Text>
                            <Text style={{...typoStyle.fsBold, ...typoStyle.fsFive, ...spacingStyle.mlOne}}>
                                {transactions.dataTransaction.to}
                            </Text>
                        </Row>
                    </Row>

                    <Row style={{...spacingStyle.mxTwo, ...spacingStyle.mbOne, ...spacingStyle.mtThree}}>
                        <Collapse>
                            <CollapseHeader>
                                <View>
                                    <Row style={{...colorStyle.bgPrimary, ...borderStyle.borderRadThree, ...borderStyle.borderWidthThree, ...borderStyle.borderPrimary}}>
                                        <Text style={{...typoStyle.fsBold, ...colorStyle.light}}>
                                            Detail
                                        </Text>
                                        <Icon name="bars" size={15} style={{...spacingStyle.mlTwenty, ...colorStyle.light, ...spacingStyle.prTwo}}></Icon>
                                    </Row>
                                </View>
                                
                            </CollapseHeader>
                                <CollapseBody>
                                    <Row style={{...spacingStyle.mtOne}}>
                                        <Row>
                                            <Text style={{...typoStyle.fsBold}}>
                                                Shuttle Info : 
                                            </Text>                            
                                        </Row>
                                    </Row>

                                    <Row style={{...spacingStyle.mtOne}}>
                                        <Row>
                                            <Text style={{...typoStyle.fsBold}}>
                                                Shuttle : 
                                            </Text>
                                            <Text style={{...spacingStyle.mlOne}}>
                                                {transactions.dataTransaction.shuttleName}
                                            </Text>
                                        </Row>    
                                    </Row>

                                    <Row style={{...spacingStyle.mtOne}}>
                                        <Row>
                                            <Text style={{...typoStyle.fsBold}}>
                                                Class : 
                                            </Text>
                                            <Text style={{...spacingStyle.mlOne}}>
                                                {transactions.dataTransaction.class}
                                            </Text>
                                        </Row>    
                                    </Row>

                                    <Row style={{...spacingStyle.mtOne}}>
                                        <Row>
                                            <Text style={{...typoStyle.fsBold}}>
                                                Booked Seat(s) : 
                                            </Text>

                                            {
                                                transactions.dataTransaction.seats.map ((el, i) => {
                                                    return (
                                                        <View key= {i}>
                                                            <Text style={{...spacingStyle.mlOne}}>
                                                                {el}
                                                            </Text>
                                                        </View>
                                                    )
                                                })
                                            }
                                            
                                        </Row>    
                                    </Row>

                                    <Row style={{...spacingStyle.mtThree}}>
                                        <Row>
                                            <Text style={{...typoStyle.fsBold}}>
                                                Passenger(s) : 
                                            </Text>                            
                                        </Row>
                                    </Row>

                                    <Col style={{...spacingStyle.mtOne, flexWrap: "wrap"}}>
                        
                                        {
                                            transactions.dataTransaction.passengers.map ((el, i) => {
                                                return (
                                                    <Col key= {i} style={{...spacingStyle.pxTwo, ...spacingStyle.pyTwo}}>
                                                        
                                                        <Row>
                                                            <Text style={{...spacingStyle.mlOne, ...typoStyle.fsBold}}>
                                                                Seat:
                                                            </Text>
                                                        </Row>

                                                        <Row>
                                                            <Text style={{...spacingStyle.mlOne}}>
                                                                {el.numSeat}
                                                            </Text>
                                                        </Row>

                                                        <Row style={{...spacingStyle.ptTwo}}>
                                                            <Text style={{...spacingStyle.mlOne, ...typoStyle.fsBold}}>
                                                                Name:
                                                            </Text>
                                                        </Row>

                                                        <Row>
                                                            <Text style={{...spacingStyle.mlOne}}>
                                                                {el.name}
                                                            </Text>
                                                        </Row>

                                                        <Row style={{...spacingStyle.ptTwo}}>
                                                            <Text style={{...spacingStyle.mlOne, ...typoStyle.fsBold}}>
                                                                Age: 
                                                            </Text>
                                                        </Row>

                                                        <Row>
                                                            <Text style={{...spacingStyle.mlOne}}>
                                                                {el.age} year(s) old
                                                            </Text>
                                                        </Row>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Col>
                                    
                                    <Row style={{...spacingStyle.mtThree}}>
                                        <Row>
                                            <Text style={{...typoStyle.fsBold}}>
                                                Contact Info : 
                                            </Text>                            
                                        </Row>
                                    </Row>

                                    <Row style={{...spacingStyle.mtOne}}>
                                        <Row>
                                            <Text style={{...typoStyle.fsBold}}>
                                                Email User : 
                                            </Text>
                                            <Text style={{...spacingStyle.mlOne}}>
                                                {transactions.dataTransaction.emailUser}
                                            </Text>
                                        </Row>    
                                    </Row>

                                    <Row style={{...spacingStyle.mtOne}}>
                                        <Row>
                                            <Text style={{...typoStyle.fsBold}}>
                                                Phone Number : 
                                            </Text>
                                            <Text style={{...spacingStyle.mlOne}}>
                                                {transactions.dataTransaction.contactPhone}
                                            </Text>
                                        </Row>    
                                    </Row>

                                    <Row style={{...spacingStyle.mtThree}}>
                                        <Row>
                                            <Text style={{...typoStyle.fsBold}}>
                                                Total : 
                                            </Text>   
                                            <Text style={{...spacingStyle.mlOne}}>
                                                Rp. {transactions.dataTransaction.totalPrice} 
                                            </Text>                         
                                        </Row>
                                    </Row>
                                    {/* <Text>Ta daa!</Text> */}
                                </CollapseBody>
                        </Collapse>
                    </Row>
                    
                </View>

                <View style={{...spacingStyle.mtSeven, ...spacingStyle.mlThree, justifyContent:"center" }}>
                    <H2 style={{...typoStyle.fsBold}}>
                        Payment Methods
                    </H2>
                </View>

                <View style={{...spacingStyle.mtThree, ...spacingStyle.mxThree, ...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree}}>
                    <Col style={{...spacingStyle.mxTwo}}>
                        <Text style={{...typoStyle.fsBold, ...typoStyle.fsThree}}>
                            Virtual Account Transfer
                        </Text>
                        <Row>
                            <Icon name="money" size={25} style={{...colorStyle.primary}}></Icon>
                            <Icon name="cc-paypal" size={25} style={{...spacingStyle.mlTwo, ...colorStyle.primary}}></Icon>
                        </Row>
                    </Col>

                    <Col style={{...spacingStyle.mxTwo, ...spacingStyle.myTwo}}>
                        <Text style={{...typoStyle.fsBold, ...typoStyle.fsThree}}>
                            Credit Card
                        </Text>
                        <Row>
                            <Icon name="cc-visa" size={25} style={{...colorStyle.primary}}></Icon>
                            <Icon name="cc-mastercard" size={25} style={{...spacingStyle.mlTwo, ...colorStyle.primary}}></Icon>
                            <Icon name="cc-diners-club" size={25} style={{...spacingStyle.mlTwo, ...colorStyle.primary}}></Icon>
                        </Row>
                    </Col>

                    <Col style={{...spacingStyle.mxTwo, ...spacingStyle.mbTwo}}>
                        <Text style={{...typoStyle.fsBold, ...typoStyle.fsThree}}>
                            Pay Later
                        </Text>
                        <Text>
                            <Icon name="cc-jcb" size={25} style={{...colorStyle.primary}}></Icon>
                        </Text>
                    </Col>
                    
                </View>
                
                {
                    transactions.dataTransaction.status === "unpaid" ?
                        <Row style={{...spacingStyle.myThree}}>
                            <Col>
                                <Button rounded bordered danger style={{...colorStyle.bgLight,}} onPress={onCancelled}>
                                    <Text style={{...colorStyle.primary}}>
                                        Cancel Booking
                                    </Text>
                                </Button>
                            </Col>

                            <Col>
                                <Button rounded style={{alignSelf: "flex-end", ...spacingStyle.mrTwo, ...colorStyle.bgPrimary}} onPress={onPaid}>
                                    <Text style={{...colorStyle.light}}>
                                        Booking Payment
                                    </Text>
                                </Button>
                            </Col>
                        </Row>
                    :
                        null
                }
                

            </Content>
        </Container>
    )
    
}

const mapDispatchToProps = {
    getDataTransaction
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions
    } 
}

export default connect (mapStateToProps, mapDispatchToProps) (Payment)

// export default Payment