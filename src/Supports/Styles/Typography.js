const { StyleSheet } = require ("react-native")

const One = 10
const Two = 12
const Three = 15
const Four = 16
const Five = 18
const Six = 20
const Seven = 30
const Eight = 35
const Nine = 45
const Ten = 50

const typography = StyleSheet.create ({
    fsOne : {fontSize: One},
    fsTwo: {fontSize: Two},
    fsThree: {fontSize: Three},
    fsFour: {fontSize: Four},
    fsFive: {fontSize: Five},
    fsSix: {fontSize: Six},
    fsSeven: {fontSize: Seven},
    fsEight: {fontSize: Eight},
    fsNine: {fontSize: Nine},
    fsTen: {fontSize: Ten},

    fsBold: {fontWeight: "bold"},
    fsItalic: {fontStyle: "italic"},
})

export default typography