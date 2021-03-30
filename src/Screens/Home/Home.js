import React, { useState } from "react"
import Icon from 'react-native-vector-icons/FontAwesome'
import DatePicker from 'react-native-datepicker'
import {Picker} from '@react-native-picker/picker'
import { Button, Col, Container, Content, Footer, Form, Grid, H1, H2, Input, Item, Label, Row, Text } from "native-base"

// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"

// Redux
import { connect } from "react-redux"
import {onBookingSearch} from "../../Redux/Actions/searchAction"

const Home = ({navigation: {navigate}, onBookingSearch, search}) => {

    const [inputUser, setInputUser] = useState (
        {
            // type: null,
            from: null,
            to: null,
            date: null,
            numSeat: null
        }
    )

    const [searchError, setSearchError] = useState ("")

    const submitSearch = () => {
        
        if (inputUser.from && inputUser.to && inputUser.date && inputUser.numSeat) {
            // console.log (inputUser)
            onBookingSearch (inputUser)
            navigate ("ShuttlesList", {data: inputUser})
            setSearchError ("")
        
        } else {
            return setSearchError ("Please fill every data field")
        }
       
    }

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

                <Form style={{...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree, ...spacingStyle.myFive, ...spacingStyle.mxThree}}>
                    {/* <Item stackedLabel>
                        <Label style={{...typoStyle.fsBold}}>Shuttle Type :</Label>
                        <Picker
                            selectedValue={"-Choose-"}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) =>
                                setInputUser({...inputUser, type: itemValue})
                            }>
                            <Picker.Item label="-Choose-" value="" />
                            <Picker.Item label="All" value="All" />
                            <Picker.Item label="Bus" value="Bus" />
                            <Picker.Item label="Travel" value="Travel" />
                            </Picker>
                    </Item> */}
                    <Item stackedLabel style={{...spacingStyle.mtOne}}>
                        <Label style={{...typoStyle.fsBold}}>From :</Label>
                        <Input onChangeText={(input) => setInputUser({...inputUser, from: input})}></Input>
                    </Item>
                    <Item stackedLabel style={{...spacingStyle.mtOne}}>
                        <Label style={{...typoStyle.fsBold}}>To :</Label>
                        <Input onChangeText={(input) => setInputUser({...inputUser, to: input})}></Input>
                    </Item>

                    <Row style={{justifyContent:"space-between"}}>
                        <Item stackedLabel style={{...spacingStyle.mtOne, flex: 1}}>
                            <Label style={{...typoStyle.fsBold}}>Date :</Label>
                            <DatePicker
                                style={{width: 200}}
                                date={inputUser.date}
                                mode="date"
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                minDate={new Date ()}
                                maxDate="31-12-2999"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 10,
                                    marginLeft: 5
                                },
                                dateInput: {
                                    marginLeft: 0,
                                    marginTop: 10,
                                    borderWidth: 0
                                }
                                // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(inputDate) => setInputUser({...inputUser, date: inputDate})}
                            />
                        </Item>
                        <Item stackedLabel style={{...spacingStyle.mtOne, flex: 1}}>
                            <Label style={{...typoStyle.fsBold}}>Number of Seat(s) :</Label>
                            <Picker
                            selectedValue={"-Choose-"}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) =>
                                setInputUser({...inputUser, numSeat: itemValue})
                            }>
                            <Picker.Item label="-Choose-" value="" />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            </Picker>
                        </Item>
                    </Row>
                                        
                    <Button rounded block style={{...colorStyle.bgPrimary, ...spacingStyle.myFive}} onPress={submitSearch}>
                        <Icon name="search" size={20} style={{...colorStyle.light}}></Icon>
                        <Text style={{...colorStyle.light}}>
                            Search
                        </Text>
                    </Button>
                    
                </Form>

                <Grid style={{...spacingStyle.myThree, ...spacingStyle.mlThree}}>
                    <Row>
                        <Text style={{...colorStyle.danger, ...typoStyle.fsItalic, textAlign:"center"}}>
                            {
                                searchError
                            }
                        </Text>
                    </Row>

                    <Row>
                        
                    </Row>

                </Grid>

           </Content>
        </Container>
    )
}

const mapDispatchToProps = {
    onBookingSearch
}

const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Home)

// export default Home