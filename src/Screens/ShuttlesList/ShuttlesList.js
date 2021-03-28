import React, { useEffect, useState } from "react"
import { Image} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import {Body, Card, CardItem, Container, Content, Grid, Header, H1, H2, Row, Text, Col, View, Button } from "native-base"

// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"

// Icon
import Icon from "react-native-vector-icons/FontAwesome"

// Link API
import {urlAPI} from "../../Supports/Constants/urlAPI"

// Redux
import { connect } from "react-redux"
import { getShuttleList } from "./../../Redux/Actions/shuttleAction"
import { onSaveAsyncStorage } from "../../Redux/Actions/userAction"


const ShuttlesList = ({navigation: {navigate}, navigation, route, getShuttleList, shuttles}) => {   

    const onShuttleDetail = (id) => {
        navigate ("ShuttleDetail", id)
    }

    useEffect (() => {
        // console.log (route.params.data)
        let departure = route.params.data.from
        let arrival = route.params.data.to

        getShuttleList (departure, arrival)
    }, [])

    // return (
    //     <Container>
    //         {   
    //             console.log (shuttles)
    //         }

    //         {
    //             console.log (`Data dari shuttles`)
    //         }

    //         <Button onPress={onShuttleDetail}>
    //             <Text>
    //                 Detail
    //             </Text>
    //         </Button>
    //     </Container>
    // )

    if ( shuttles.shuttleList === null ) {
        return (
            <Container>
    {/* {   
        console.log (shuttles)
    }

    {
        console.log (`Data dari shuttles`)
    }    */}
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
                             Loading Shuttle List
                         </H2>
                    </View>
    
                </Content>
    
            </Container>
        )
    } else {
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

                    <Grid>
                        <Row>
                            <H2 style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, ...typoStyle.fsBold}}>
                                From : {route.params.data.from} To: {route.params.data.to}
                            </H2>
                        </Row>
                    </Grid>

                    {
                        shuttles.shuttleList.length === 0 ?
                        
                        <View style={{...spacingStyle.mtThree, ...spacingStyle.mlThree, justifyContent:"center" }}>
                            <Text style={{...typoStyle.fsItalic, ...colorStyle.disabled}}>
                                No available shuttle to your destination
                            </Text>
                        </View>

                        :

                        shuttles.shuttleList.map ((el, i) => {
                            return (
                                <TouchableOpacity onPress={() => onShuttleDetail ({id: el.id})} key={i}>
                                    
                                    <View style={{...spacingStyle.myThree, ...spacingStyle.mxTwo, ...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderRadFour}}>
                                        
                                            <Row style={{...spacingStyle.mtThree}}>
                                                <Col style={{flex: 3, ...spacingStyle.mlOne}}>
                                                    <Row>
                                                        <Text style={{...typoStyle.fsBold}}>
                                                            {el.type} {el.name}
                                                        </Text> 
                                                    </Row>
                        
                                                    <Row>
                                                        <Text style={{...typoStyle.fsBold}}>
                                                        {el.class} Class
                                                        </Text>
                                                    </Row>
                                                </Col>
                        
                                                {/* <Col style={{flex: 1}}>
                                                    <Button rounded style={{...colorStyle.bgPrimary}} onPress={onShuttleDetail}>
                                                        <Text>
                                                            Detail
                                                        </Text>
                                                    </Button>
                                                </Col> */}
                                            </Row>
                        
                                            <Row>
                                                
                                            </Row>
                        
                                            <Row style={{...spacingStyle.myThree}}>
                        
                                                <Col style={{...spacingStyle.mxOne, flex: 1}}>
                                                    <Image source={{uri: el.image1 }} style={{height: 75, width: "auto", flex: 1}}></Image>
                                                </Col>
                        
                                                <Col style={{flex: 2}}>
                                                    <Row>
                                                        <Col>
                                                            <Text>
                                                                From : {route.params.data.from}
                                                            </Text>
                                                        </Col>
                        
                                                        <Col>
                                                            <Text>
                                                                To: {route.params.data.to}
                                                            </Text>
                                                        </Col>
                                                    </Row>
                        
                                                    <Row>
                                                        <Col>
                                                            <Text>
                                                                Dep: {el.timeDeparture}
                                                            </Text>
                                                        </Col>
                        
                                                        <Col>
                                                            <Text>
                                                                Arr: {el.timeArrival}
                                                            </Text>
                                                        </Col>
                                                    </Row>
                        
                                                    <Row>
                                                        <Col>
                                                            <Text style={{...typoStyle.fsItalic}}>
                                                                {el.seat.length} seats
                                                            </Text>
                                                        </Col>
                                                    </Row>
                        
                                                    <Row>
                                                        <Text style={{...typoStyle.fsBold}}> 
                                                            Rp. {(el.price)}
                                                        </Text>
                                                    </Row>
                                                    
                                                </Col>
                        
                                                
                                            </Row>

                                        
                                        
                                    </View>


                                        
                                        
                                        
                                    


                                </TouchableOpacity>
                                
                            )
                        })

                    }
                    

                </Content>
            </Container>

            
            
        )
    }   
    
}

const mapDispatchToProps = {
    getShuttleList, onSaveAsyncStorage
}

const mapStateToProps = (state) => {
    return {
        shuttles : state.shuttles
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (ShuttlesList)