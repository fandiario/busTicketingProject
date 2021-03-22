const { StyleSheet } = require ("react-native")

const primary = "#d35400"
const secondary = "#0652DD"
const warning = "#C4E538"
const danger = "#7E191B"
const light = "#f5f6fa"
const dark = "#2f3640"

const color = StyleSheet.create ({
    bgPrimary: { backgroundColor: primary },
    primary: { color: primary },

    bgSecondary: { backgroundColor: secondary },
    secondary: { color: secondary },

    bgLight: { backgroundColor: light },
    light: { color: light },

    bgDark: { backgroundColor: dark },
    dark: { color: dark },

    bgWarning: { backgroundColor: warning },
    warning: { color: warning },

    bgDanger: { backgroundColor: danger },
    danger: { color: danger },


})

export default color