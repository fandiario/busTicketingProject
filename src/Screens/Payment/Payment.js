import React from "react"
import { Container, Content, H1, Row, Grid, View, H2 } from "native-base"

// Import CSS
import colorStyle from "../../Supports/Styles/Color"
import spacingStyle from "../../Supports/Styles/Spacing"
import typoStyle from "../../Supports/Styles/Typography"
import borderStyle from "../../Supports/Styles/Border"

// Icon
import Icon from "react-native-vector-icons/FontAwesome"

const Payment = ({navigation}) => {
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
                        Payment Info
                    </H2>
                </View>

            </Content>
        </Container>
    )
    
}

export default Payment