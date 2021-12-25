import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        paddingTop: 60,
    },

    pictureView: {
        paddingHorizontal: 15,
        marginTop: 15
    },

    headingText: {
        color: "#20262F",
        fontSize: 16
    },

    phoneNumberView: {
        borderRadius: 10,
        borderColor: "#C5CCD3",
        marginTop: 10,
        paddingHorizontal: 15,
        backgroundColor: "#E4E4E4",
        paddingVertical: Platform.OS === "ios" ? 12 : 0
    },

    errorText: {
        marginHorizontal: 15,
        color: "#ED1B2E",
        padding: 4
    },

    genderButton: {
        paddingVertical: 10,
        justifyContent: "space-between",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#DAE1E9",
        paddingHorizontal: 15,
        marginTop: 10,
        alignItems: "center",
        flexDirection: "row"
    },

    genderText: {
        color: "#0E3067",
        fontSize: 15,
    },

    genderEmptytext: {
        color: "#627177",
        fontSize: 15,
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
        color: "#fff",
        fontWeight: "700"
    },

    genderModalBg: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#41414150",
    },

    genderModalView: {
        padding: 10,
        backgroundColor: "#fff",
        marginHorizontal: 20,
        borderRadius: 10
    },

    genderModalOptionView: {
        marginVertical: 7.5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    genderModalOptionText: {
        color: "#627177",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
    },

    genderModalOptionDivider: {
        width: "100%",
        height: 0.5,
        backgroundColor: "#b5b5b5"
    },

})

export default styles;