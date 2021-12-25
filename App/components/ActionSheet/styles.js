import { StyleSheet, Platform } from "react-native";

export const ActionSheetStyles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#41414150"
    },

    modalView: {
        backgroundColor: "#FFF",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cancelModalView: {
        backgroundColor: "#FFF",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginTop: 2,
        paddingBottom: 15,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    modalOptionsTextStyle: {
        color: "#0E3067",
        fontSize: 20,
        fontWeight: "normal",
        textAlign: "center",
        marginVertical: 10,
    },

    modalCancelTextStyle: {
        color: "#0E3067",
        fontSize: 20,
        fontWeight: "normal",
        textAlign: "center",
        marginVertical: 10,
    },

    modalOptionDivider: {
        height: 0.5,
        width: "85%",
        backgroundColor: "#b5b5b5",
    },

    modalButtonBg: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});