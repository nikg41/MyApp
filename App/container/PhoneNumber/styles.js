import { StyleSheet, Platform, Dimensions } from "react-native";
const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        flexDirection: "column",
        justifyContent: "space-between"
    },

    contatcView: {
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#C5CCD3",
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 6,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "space-between"
    },
    countryName: {
        color: "black",
        marginRight: 10,
        fontSize: 14
    },
    countryPrefix: {
        color: "black",
        marginLeft: 10,
        fontSize: 14
    },
    seperator: { backgroundColor: "#C5CCD3", width: 1, height: 20 },

    phoneNumberView: {
        borderRadius: 10,
        borderColor: "#C5CCD3",
        marginTop: 30,
        marginHorizontal: 20,
        paddingHorizontal: 15,
        backgroundColor: "#E4E4E4",
        paddingVertical: Platform.OS === "ios" ? 12 : 0
    },
    errorView: {
        marginHorizontal: 20,
        color: "#ED1B2E",
        padding: 4
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

    bottomView: {
        marginTop: 30
    },
    orView: {
        justifyContent: "center",
        alignItems: "center"
    },
    orText: {
        fontSize: 16,
        color: "#2B3039"
    },
    socialLoginView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    socialIcons: {
        marginHorizontal: 25,
        borderRadius: 30,
        borderWidth: 1,
        padding: 8,
        borderColor: "#C5CCD3"
    },
    SocialImage: { width: 30, height: 30 },

})

export default styles;