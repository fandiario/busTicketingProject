import React from "react"
import { Container, Content, H1, Row, Grid, View, H2, Text, Col, Button } from "native-base"

// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"

// Icon
import Icon from "react-native-vector-icons/FontAwesome"

const Payment = ({navigation, route}) => {
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

                <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree}}>
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
                            <Button rounded style={{...colorStyle.bgLight,}}>
                                <Text style={{...colorStyle.primary}}>
                                    Cancel
                                </Text>
                            </Button>
                        </Col>

                        <Col>
                            <Button rounded style={{alignSelf: "flex-end", ...spacingStyle.mrTwo, ...colorStyle.bgPrimary}}>
                                <Text style={{...colorStyle.light}}>
                                    Accept
                                </Text>
                            </Button>
                        </Col>
                    </Row>

                </View>

            </Content>
        </Container>
    )
    
}

export default Payment