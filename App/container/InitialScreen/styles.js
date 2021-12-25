import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#53AD99"
    },
    headerView: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        color: "#fff",
        fontSize: 26,
        fontStyle: "italic",
        fontWeight: "bold"
    },
    imageView: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    bottomView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    title: {
        color: "#fff",
        fontSize: 26,
        fontWeight: "bold"
    },
    description: {
        fontSize: 12,
        fontWeight: "100",
        lineHeight: 20,
        paddingHorizontal: 30,
        marginTop: 20,
        color: "#fff"
    },
    buttonView: {
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 80,
    },
    button: {
        backgroundColor: "#fff",
        height: 50,
        width: width * 0.9,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#1F4439"
    }

});

export default styles;
