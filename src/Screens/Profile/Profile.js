import React from "react"
import { connect } from "react-redux"
import { Button, Container, Text } from "native-base"

// Redux
import {onUserLogout} from "../../Redux/Actions/userAction"

const Profile = ( {onUserLogout} ) => {
    return (
        <Container>
           <Text>
               Hello from Profile Page
            </Text>
            <Button onPress= {onUserLogout}>
                <Text>
                    Log Out
                </Text>
            </Button> 
        </Container>
    )
}

// export default Profile
const mapDispatchToProps = {
    onUserLogout
}

export default connect ("", mapDispatchToProps) (Profile)