const { StyleSheet } = require ("react-native")

const primary = "#d35400"
const secondary = "#0652DD"
const warning = "#C4E538"
const danger = "#7E191B"
const light = "#f5f6fa"
const dark = "#2f3640"

const border = StyleSheet.create ({
    borderPrimary : {borderColor: primary},
    borderSecondary : {borderColor: secondary},
    borderWarning : {borderColor: warning},
    borderDanger : {borderColor: danger},
    borderLight : {borderColor: light},
    borderDark : {borderColor: dark},

    borderRadOne : {borderRadius: 1},
    borderRadTwo : {borderRadius: 2},
    borderRadThree : {borderRadius: 5},
    borderRadFour : {borderRadius: 8},
    borderRadFive : {borderRadius: 10},
    borderRadSix : {borderRadius: 12},
    borderRadSeven : {borderRadius: 15},
    borderRadEight : {borderRadius: 20},
    

    borderWidthOne : {borderWidth: 1},
    borderWidthTwo : {borderWidth: 2},
    borderWidthThree : {borderWidth: 3},

})

export default border