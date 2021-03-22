import React, { useState } from "react"
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, Col, Container, Content, DatePicker, Footer, Form, Grid, H1, H2, Input, Item, Label, Row, Text } from "native-base"

// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"

const Home = () => {

    const [inputUser, setInputUser] = useState (
        {
            shuttle: "",
            from: "",
            to: "",
            date: "",
        }
    )

    const setDate = (input) => {
        setInputUser ({...inputUser, date: input})
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

                <Form style={{...borderStyle.borderPrimary, ...borderStyle.borderWidthThree, ...borderStyle.borderRadThree, ...spacingStyle.myFive}}>
                    <Item stackedLabel>
                        <Label style={{...typoStyle.fsBold}}>Shuttles :</Label>
                        <Input></Input>
                    </Item>
                    <Item stackedLabel style={{...spacingStyle.mtOne}}>
                        <Label style={{...typoStyle.fsBold}}>From :</Label>
                        <Input></Input>
                    </Item>
                    <Item stackedLabel style={{...spacingStyle.mtOne}}>
                        <Label style={{...typoStyle.fsBold}}>To :</Label>
                        <Input></Input>
                    </Item>

                    
                    <Item stackedLabel style={{...spacingStyle.mtOne}}>
                        <Label style={{...typoStyle.fsBold}}>Date :</Label>
                        <Input></Input>
                    </Item>

                    {/* <Item stackedLabel style={{...spacingStyle.mtOne}}>
                        <Label style={{...typoStyle.fsBold}}>Date :</Label>
                        <DatePicker
                            defaultDate={new Date(2018, 4, 4)}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2018, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            disabled={false}
                        ></DatePicker>
                        <Text>
                            {inputUser.date.toString().substr(4, 12)}
                        </Text>
                    </Item> */}

                    
                    <Button rounded block style={{...colorStyle.bgPrimary, ...spacingStyle.myFive}}>
                        <Icon name="search" size={20} style={{...colorStyle.light}}></Icon>
                        <Text style={{...colorStyle.light}}>
                            Search
                        </Text>
                    </Button>
                    
                </Form>

                <Grid style={{...spacingStyle.myThree}}>
                    <Row>
                        <Text style={{...typoStyle.fsBold}}>
                            Result :
                        </Text>
                    </Row>

                    <Row>
                        
                    </Row>

                </Grid>

           </Content>
        </Container>
    )
}

export default Home