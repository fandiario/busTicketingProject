import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Container, Col, Content, Grid, H1, H2, Row, Spinner, Text, View } from "native-base"
import { Image } from "react-native"

// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"

// Redux
import {getShuttleDetail} from "../../Redux/Actions/shuttleAction"

// Icon
import Icon from "react-native-vector-icons/FontAwesome"

const ShuttleDetail = ({navigation, route, getShuttleDetail, shuttles}) => {

    useEffect (() => {
        let idShuttle = route.params.id
        // console.log (idShuttle)
        getShuttleDetail (idShuttle)
    }, [])

    if (shuttles.shuttleDetail === null) {
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
                            {/* <Text>
                                Tes
                            </Text> */}
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
                           Price : Rp. {shuttles.shuttleDetail.price}
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

                    <Row style={{...spacingStyle.mtThree, ...spacingStyle.mxTwo}}>
                        
                        <Col>
                            <Text style={{...typoStyle.fsBold}}>
                                Available Seat: 
                            </Text>
                        </Col>
        
                    </Row>

                    {
                        shuttles.shuttleDetail.type === "Bus" ?

                        <View style={{...spacingStyle.mtOne, ...spacingStyle.mxTwo, ...spacingStyle.mbThree, ...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree}}>
                        
                            <Row>
                                <Col>
                                    <Text>
                                        1A
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        2A
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        3A
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        4A
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        5A
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        6A
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        7A
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        8A
                                    </Text>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Text>
                                        1B
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        2B
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        3B
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        4B
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        5B
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        6B
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        7B
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        8B
                                    </Text>
                                </Col>
                            </Row>

                            <Row style={{...spacingStyle.myTwo}}>
                                <Icon name="arrow-left" size={20} style={{...spacingStyle.mrOne}}></Icon>
                                <Text>
                                    Front
                                </Text>
                            </Row>

                            <Row>
                                <Col>
                                    <Text>
                                        1C
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        2C
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        3C
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        4C
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        5C
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        6C
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        7C
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        8C
                                    </Text>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Text>
                                        1D
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        2D
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        3D
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        4D
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        5D
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        6D
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        7D
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        8D
                                    </Text>
                                </Col>
                            </Row>
            
                        </View>

                        :

                        <View style={{...spacingStyle.mtOne, ...spacingStyle.mxTwo, ...spacingStyle.mbThree, ...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree}}>
                        
                            <Row>
                                <Col>
                                    <Text>
                                        1A
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        2A
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        3A
                                    </Text>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Text>
                                        1B
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        2B
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        3B
                                    </Text>
                                </Col>
                            </Row>

                            <Row style={{...spacingStyle.myTwo}}>
                                <Icon name="arrow-left" size={20} style={{...spacingStyle.mrOne}}></Icon>
                                <Text>
                                    Front
                                </Text>
                            </Row>

                            <Row>
                                <Col>
                                    <Text>
                                        1C
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        2C
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        3C
                                    </Text>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Text>
                                        1D
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        2D
                                    </Text>
                                </Col>
                                <Col>
                                    <Text>
                                        3D
                                    </Text>
                                </Col>
                            </Row>
            
                        </View>   
                    }                   
                    
                </View>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    getShuttleDetail 
}

const mapStateToProps = (state) => {
    return {
        shuttles: state.shuttles
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (ShuttleDetail)

// export default ShuttleDetail
