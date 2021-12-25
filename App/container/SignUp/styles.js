import { StyleSheet, Dimensions } from "react-native";
const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        paddingTop: 60,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    pictureView: {
        paddingHorizontal: 15,
        marginTop: 15
    },
    headingText: {
        color: "#20262F",
        fontSize: 16
    },
    uploadText: {
        color: "#0E3067",
        fontSize: 15,
        marginLeft: 20
    },
    uploadButton: {
        flexDirection: "row",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#DAE1E9",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
        alignContent: "center"
    },
    phoneNumberView: {
        borderRadius: 10,
        borderColor: "#C5CCD3",
        marginTop: 10,
        paddingHorizontal: 15,
        backgroundColor: "#E4E4E4",
        paddingVertical: Platform.OS === "ios" ? 12 : 0
    },
    nextButton: {
        paddingVertical: 10,
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#DAE1E9",
        marginTop: 10,
        alignItems: "center",
        marginBottom: 10
    },
    dobButton: {
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
    dobText: {
        color: "#0E3067",
        fontSize: 15,
    },

    dobEmptytext: {
        color: "#627177",
        fontSize: 15,
    },

    nextText: {
        color: "#010913",
        fontSize: 17,
        fontWeight: "700"
    },

    modalContainerStyle: {
        flex: 1,
        position: "relative",
        backgroundColor: "#41414150"
    },

    modalDoneButtonStyle: {
        height: 44,
        justifyContent: "center"
    },

    modalDoneTextStyle: {
        fontSize: 15,
        color: "#0E3067"
    },

    modalDoneButtonContainerStyle: {
        height: 44,
        backgroundColor: "#FAFAF8",
        alignItems: "flex-end",
        width: "100%",
        justifyContent: "center",
        paddingRight: 10
    },

    modalWrapperStyle: {
        height: 260,
        width: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        position: "absolute",
        bottom: 0
    },

    errorText: {
        marginHorizontal: 15,
        color: "#ED1B2E",
        padding: 4
    },
})

export default styles;