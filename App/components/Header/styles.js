import { StyleSheet, Platform, Dimensions } from "react-native";
const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    headerView: {
        padding: 10,
        backgroundColor: "#FAFAFA"
    },
    textView: {
        paddingHorizontal: 15,
        marginTop: height * 0.12
    },
    heading: {
        fontSize: 20,
        fontWeight: "800",
        color: "black",
    },
    headingText: {
        fontSize: 14,
        lineHeight: 20,
        color: "#627177"
    },
})

export default styles;