import React from "react"
import { Container, Content, Spinner, Text } from "native-base"

const Splash = () => {
    return (
        <Container>
            <Content>
                <Spinner style={{marginTop: 50}}></Spinner>
                {/* <Text>
                    Loading...
                </Text> */}
            </Content>
        </Container>
    )
}

export default Splash