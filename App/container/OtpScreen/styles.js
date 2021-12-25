import { StyleSheet, Platform, Dimensions } from "react-native";
const width = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get('window').height - 180;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F1F1",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    OtpInputView: {
        marginHorizontal: 20,
        flex: 1, height: HEIGHT * 0.2
    },
    otpContainer: {
        width: width * 0.2,
        height: 45,
        backgroundColor: "#DFDFDF",
        borderRadius: 8,
        color: "#283542",
        fontSize: 15,
    },
    resendView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 18
    },

    dontgetText: {
        fontSize: 14,
        lineHeight: 20,
        color: "#627177"
    },

    resendText: {
        fontSize: 14,
        lineHeight: 20,
        color: "#355588"
    },
    resend: {
        fontSize: 14,
        lineHeight: 20,
        color: "#0E3067"
    },
    buttonView: {
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 20,
    },
    button: {
        backgroundColor: "#EA4B43",
        height: 50,
        width: width * 0.9,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    buttonText: {
        fontSize: 16,
        color: "#fff"
    },
})

export default styles;