import React, { useState, useRef, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, BackHandler } from 'react-native';
import styles from "./styles";
import { connect } from 'react-redux';
import TermsAndCondition from '../../components/TermsAndCondition';
import Header from '../../components/Header';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { isEmpty } from 'ramda';

const OtpScreen = ({ navigation, userDetails }) => {
    const [timer, setTimer] = useState(60);
    const [otp, setOtp] = useState('');
    let intervalRef = useRef();

    const decreaseNum = () => setTimer((prev) => prev - 1);
    const navigateToHomePage = useRef(() => {
        navigation.navigate("InitialScreen");
        return true;
    });
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", navigateToHomePage.current);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", navigateToHomePage.current);
        };
    });
    useEffect(() => {
        if (timer < 1)
            return;
        intervalRef.current = setInterval(decreaseNum, 1000);
        return () => clearInterval(intervalRef.current);
    }, [timer]);

    const navigationHandler = () => {
        if (!isEmpty(otp)) {
            navigation.navigate("SignUp")
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 40, backgroundColor: "#F1F1F1" }}>
                <Header
                    title="Verify OTP"
                    description="Please enter 4-digit OTP sent to you at"
                    secDescription={`${userDetails.countryCode}-${userDetails.phoneNumber}`}
                    onClick={() => navigation.goBack()}
                    backVisible={false}
                />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: "flex-start",
                }}>
                    <OTPInputView
                        style={styles.OtpInputView}
                        placeholderCharacter={"-"}
                        pinCount={4}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.otpContainer}
                        onCodeFilled={(content) => {
                            setOtp(content)
                        }}
                    />
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={navigationHandler}>
                        <Text style={styles.buttonText}>{"Verify & continue"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.resendView}>
                    <Text style={styles.dontgetText}>
                        Didn't get OTP? {timer > 0 ?
                            <Text style={styles.resendText}>{`Resend ${timer}s`}</Text> :
                            <Text
                                style={styles.resend}
                                onPress={() => { setTimer(60) }}>
                                {`Resend`}</Text>}</Text>
                </View>
            </View>
            <View style={{ marginBottom: 30 }}>
                <TermsAndCondition />
            </View>
        </SafeAreaView >
    )
};
const mapStateToProps = state => ({
    userDetails: state.userDetails
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(OtpScreen);

