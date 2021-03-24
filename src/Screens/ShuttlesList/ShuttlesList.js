import React from "react"
import { Image } from "react-native"
import {Body, Card, CardItem, Container, Content, Grid, Header, H1, H2, Row, Text, Col, View } from "native-base"

// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"


const ShuttlesList = () => {
    return (
        <Container>
            <Content>

                <Grid style={{...colorStyle.bgPrimary}}>
                    <Row style={{...spacingStyle.myThree, ...spacingStyle.mlThree,}}>
                        <H1 style={{...colorStyle.light, ...typoStyle.fsBold}}>
                            BusyBus
                        </H1>
                    </Row>
                </Grid>

                <H2 style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, ...typoStyle.fsBold}}>
                    Shuttle List
                </H2>

                <View style={{...spacingStyle.myThree}}>

                    <Card>
                        <CardItem header style={{flexDirection: "column"}}>

                            <Grid>
                                <Text style={{...typoStyle.fsBold}}>
                                    Bus Pahala Kencana 
                                </Text> 
                            </Grid>

                            <Grid>
                                <Text style={{...typoStyle.fsBold}}>
                                    Executive Class
                                </Text>
                            </Grid>
                        </CardItem>
                        <CardItem>
                        <Body>

                            <Grid>
                                <Col>
                                    <Image source={{uri: 'https://st.redbus.in/bo-images/IDN/WM/16130/1215/FR/L/LSk97O.jpeg'}} style={{height: 75, width: "auto", flex: 1}}></Image>
                                </Col>

                                <Col>
                                    <Col style={{...spacingStyle.mlThree}}>
                                        <Text>
                                            From : 
                                        </Text>
                                    </Col>
                                    <Col style={{...spacingStyle.mlThree}}>
                                        <Text>
                                            Bandung 11:00
                                        </Text>
                                    </Col>
                                </Col>
                                

                                <Col>
                                    <Col style={{...spacingStyle.mlThree}}>
                                        <Text>
                                            To : 
                                        </Text>
                                    </Col>
                                    <Col style={{...spacingStyle.mlThree}}>
                                        <Text>
                                            Surabaya  23:45
                                        </Text>
                                    </Col>
                                </Col>
                            </Grid>
                            
                        </Body>
                        </CardItem>

                        <CardItem footer style={{...spacingStyle.mtOne}}>
                            <Text style={{...typoStyle.fsBold}}>
                                Rp. 275.000
                            </Text>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header style={{flexDirection: "column"}}>

                            <Grid>
                                <Text style={{...typoStyle.fsBold}}>
                                    Bus Sugeng Rahayu
                                </Text> 
                            </Grid>

                            <Grid>
                                <Text style={{...typoStyle.fsBold}}>
                                    Executive Class
                                </Text>
                            </Grid>
                        </CardItem>
                        <CardItem>
                        <Body>

                            <Grid>
                                <Col>
                                    <Image source={{uri: 'https://st.redbus.in/bo-images/IDN/WM/18732/850/FR/L/Yv1HAi.jpeg'}} style={{height: 75, width: "auto", flex: 1}}></Image>
                                </Col>

                                <Col>
                                    <Col style={{...spacingStyle.mlThree}}>
                                        <Text>
                                            From : 
                                        </Text>
                                    </Col>
                                    <Col style={{...spacingStyle.mlThree}}>
                                        <Text>
                                            Bandung 21:00
                                        </Text>
                                    </Col>
                                </Col>
                                

                                <Col>
                                    <Col style={{...spacingStyle.mlThree}}>
                                        <Text>
                                            To : 
                                        </Text>
                                    </Col>
                                    <Col style={{...spacingStyle.mlThree}}>
                                        <Text>
                                            Surabaya  11:00
                                        </Text>
                                    </Col>
                                </Col>
                            </Grid>
                            
                        </Body>
                        </CardItem>

                        <CardItem footer style={{...spacingStyle.mtOne}}>
                            <Text style={{...typoStyle.fsBold}}>
                                Rp. 225.000
                            </Text>
                        </CardItem>
                    </Card>











                </View>
                
            </Content>
        </Container>
    )
}

export default ShuttlesList