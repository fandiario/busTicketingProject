import React, { useEffect } from "react"
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




const Payment = ({navigation, route, getDataTransaction, transactions}) => {

    useEffect (() => {
        // console.log (transactions.dataTransaction)
        getDataTransaction (route.params.idTransaction)
    })

    const dataArray = [
        { title: "Detail", content: "Lorem ipsum dolor sit amet"}
    ]

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
                                        <Text style={{...spacingStyle.mlOne, ...colorStyle.warning, textAlign:"right"}}>
                                            {transactions.dataTransaction.status}
                                        </Text>
                                    </Row>
                                :
                                    transactions.dataTransaction.status === "paid" ?

                                        <Row style={{justifyContent: "flex-end"}}>
                                            <Text style={{textAlign:"right"}}>
                                                Status :
                                            </Text>
                                            <Text style={{...spacingStyle.mlOne, ...colorStyle.primary, textAlign:"right"}}>
                                                {transactions.dataTransaction.status}
                                            </Text>
                                        </Row>
                                    :

                                        <Row style={{justifyContent: "flex-end"}}>
                                            <Text style={{textAlign:"right"}}>
                                                Status :
                                            </Text>
                                            <Text style={{...spacingStyle.mlOne, ...colorStyle.danger, textAlign:"right"}}>
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
                                        <Icon name="bars" size={15} style={{...spacingStyle.mlTwenty, ...colorStyle.light}}></Icon>
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

                    {/* <Row style={{...spacingStyle.mxTwo}}>
                        <Row>
                            <Text style={{...typoStyle.fsBold, ...typoStyle.fsThree}}>
                                Total :  
                            </Text>
                            <Text style={{...typoStyle.fsBold, ...typoStyle.fsThree, ...spacingStyle.mlOne}}>
                                Rp. {transactions.dataTransaction.totalPrice}
                            </Text>
                        </Row>

                        <Row style={{justifyContent: "center"}}>
                            
                            <Text style={{...typoStyle.fsBold, ...typoStyle.fsThree}}>
                                Detail 
                            </Text> 
                        </Row>
                    </Row> */}

                    
                </View>

                <View style={{...spacingStyle.mtSeven, ...spacingStyle.mlThree, justifyContent:"center" }}>
                    <H2 style={{...typoStyle.fsBold}}>
                        Payment Methode
                    </H2>
                </View>

                <View style={{...spacingStyle.mtThree, ...spacingStyle.mxThree, ...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree}}>
                    <Col style={{...spacingStyle.mxTwo}}>
                        <Text style={{...typoStyle.fsBold, ...typoStyle.fsThree}}>
                            Virtual Account Transfer
                        </Text>
                        <Text>
                            (insert here)
                        </Text>
                    </Col>

                    <Col style={{...spacingStyle.mxTwo, ...spacingStyle.myTwo}}>
                        <Text style={{...typoStyle.fsBold, ...typoStyle.fsThree}}>
                            Credit Card
                        </Text>
                        <Text>
                            (insert here)
                        </Text>
                    </Col>

                    <Col style={{...spacingStyle.mxTwo, ...spacingStyle.mbTwo}}>
                        <Text style={{...typoStyle.fsBold, ...typoStyle.fsThree}}>
                            Pay Later
                        </Text>
                        <Text>
                            (insert here)
                        </Text>
                    </Col>
                    
                </View>

                <Row style={{...spacingStyle.myThree}}>
                    <Col>
                        <Button rounded bordered danger style={{...colorStyle.bgLight,}}>
                            <Text style={{...colorStyle.primary}}>
                                Cancel Booking
                            </Text>
                        </Button>
                    </Col>

                    <Col>
                        <Button rounded style={{alignSelf: "flex-end", ...spacingStyle.mrTwo, ...colorStyle.bgPrimary}}>
                            <Text style={{...colorStyle.light}}>
                                Booking Payment
                            </Text>
                        </Button>
                    </Col>
                </Row>

                {/* <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree}}>
                    <Row style={{...spacingStyle.mtThree}}>
                        <Row>
                            <Text style={{...typoStyle.fsBold}}>
                                Status 
                            </Text>
                            <Text style={{...spacingStyle.mlOne}}>
                                {route.params.data.status}
                            </Text>
                        </Row>                       
                    </Row>

                    <Row style={{...spacingStyle.mtOne}}>
                        <Row>
                            <Text style={{...typoStyle.fsBold}}>
                                Id User : 
                            </Text>
                            <Text style={{...spacingStyle.mlOne}}>
                                {route.params.data.idUser}
                            </Text>
                        </Row>    
                    </Row>

                    <Row style={{...spacingStyle.mtOne}}>
                        <Row>
                            <Text style={{...typoStyle.fsBold}}>
                                Email User : 
                            </Text>
                            <Text style={{...spacingStyle.mlOne}}>
                                {route.params.data.emailUser}
                            </Text>
                        </Row>    
                    </Row>

                    <Row style={{...spacingStyle.mtOne}}>
                        <Row>
                            <Text style={{...typoStyle.fsBold}}>
                                Phone Number : 
                            </Text>
                            <Text style={{...spacingStyle.mlOne}}>
                                {route.params.data.contactPhone}
                            </Text>
                        </Row>    
                    </Row>

                    <Row style={{...spacingStyle.mtOne}}>
                        <Row>
                            <Text style={{...typoStyle.fsBold}}>
                                Shuttle : 
                            </Text>
                            <Text style={{...spacingStyle.mlOne}}>
                                {route.params.data.shuttleName}
                            </Text>
                        </Row>    
                    </Row>

                    <Row style={{...spacingStyle.mtOne}}>
                        <Row>
                            <Text style={{...typoStyle.fsBold}}>
                                Class : 
                            </Text>
                            <Text style={{...spacingStyle.mlOne}}>
                                {route.params.data.class}
                            </Text>
                        </Row>    
                    </Row>

                    <Row style={{...spacingStyle.mtOne}}>
                        <Row>
                            <Text style={{...typoStyle.fsBold}}>
                                From : 
                            </Text>
                            <Text style={{...spacingStyle.mlOne}}>
                                {route.params.data.from}
                            </Text>
                        </Row>    
                    </Row>

                    <Row style={{...spacingStyle.mtOne}}>
                        <Row>
                            <Text style={{...typoStyle.fsBold}}>
                                To : 
                            </Text>
                            <Text style={{...spacingStyle.mlOne}}>
                                {route.params.data.to}
                            </Text>
                        </Row>    
                    </Row>

                    <Row style={{...spacingStyle.mtOne}}>
                        <Row>
                            <Text style={{...typoStyle.fsBold}}>
                                Date : 
                            </Text>
                            <Text style={{...spacingStyle.mlOne}}>
                                {route.params.data.departureDate}
                            </Text>
                        </Row>    
                    </Row>

                    <Row style={{...spacingStyle.mtOne}}>
                        <Row>
                            <Text style={{...typoStyle.fsBold}}>
                                Booked Seat(s) : 
                            </Text>

                            {
                                route.params.data.seats.map ((el, i) => {
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

                    <Row style={{...spacingStyle.mtOne}}>
                        <Row>
                            <Text style={{...typoStyle.fsBold}}>
                                Passenger(s) : 
                            </Text>                            
                        </Row>
                    </Row>

                    <Row style={{...spacingStyle.mtOne, flexWrap: "wrap"}}>
                        
                        {
                            route.params.data.passengers.map ((el, i) => {
                                return (
                                    <Col key= {i} style={{...spacingStyle.pxTwo}}>
                                        
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
                    </Row>

                    <Row style={{...spacingStyle.mtThree}}>
                        <Row>
                            <Text style={{...typoStyle.fsBold}}>
                                Total : 
                            </Text>   
                            <Text style={{...spacingStyle.mlOne}}>
                                Rp. {route.params.data.totalPrice} 
                            </Text>                         
                        </Row>
                    </Row>

                    <Row style={{...spacingStyle.myThree}}>
                        <Col>
                            <Button rounded bordered danger style={{...colorStyle.bgLight,}}>
                                <Text style={{...colorStyle.primary}}>
                                    Cancel Booking
                                </Text>
                            </Button>
                        </Col>

                        <Col>
                            <Button rounded style={{alignSelf: "flex-end", ...spacingStyle.mrTwo, ...colorStyle.bgPrimary}}>
                                <Text style={{...colorStyle.light}}>
                                    Booking Payment
                                </Text>
                            </Button>
                        </Col>
                    </Row>

                </View> */}

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