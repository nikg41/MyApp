import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from "./styles";
import Icons from "react-native-vector-icons/AntDesign";
import { isEmpty } from "ramda";
import { connect } from 'react-redux';
import { savePhoneNumber } from '../../actions/index';
import { bindActionCreators } from 'redux';;
import TermsAndCondition from '../../components/TermsAndCondition';
import Header from '../../components/Header';

const PhoneNumber = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const handleNavigation = () => {
        const MOBILE_PATTERN = new RegExp('^[6-9][0-9]{9}$');
        if (phoneNumber.trim().length === 0) {
            setError("Please enter phone number.")
        } else if (!MOBILE_PATTERN.test(phoneNumber)) {
            setError("Please enter valid phone number.")
        } else {
            setError('')
            props.navigation.navigate("OtpScreen");
            props.actions.savePhoneNumber({
                phoneNumber: phoneNumber,
                countryCode: '+91'
            })
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header
                    title="Enter phone number"
                    description="We will send you a 4-digit OTP to your phone number for verification."
                    onClick={() => props.navigation.goBack()}
                />
                <View style={styles.contatcView}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            style={{ height: 25, width: 25, marginHorizontal: 10 }}
                            resizeMode='contain'
                            source={require("../../images/india.png")} />
                        <Text style={styles.countryName}>India</Text>
                        <View style={styles.seperator} />
                        <Text style={styles.countryPrefix}>+91</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Icons
                            name="down"
                            size={20}
                            color="#69777D"
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.phoneNumberView}>
                        <TextInput
                            value={phoneNumber}
                            placeholder='Your 10-digit phone number'
                            keyboardType='number-pad'
                            onChangeText={(value) => {
                                setPhoneNumber(value.trim());
                                setError('');
                            }}
                            maxLength={10} />
                    </View>
                    {!isEmpty(error) && <Text style={styles.errorView}>{error}</Text>}
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleNavigation()}>
                        <Text style={styles.buttonText}>Send OTP</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomView}>
                    <View style={styles.orView}>
                        <Text style={styles.orText}>Or</Text>
                    </View>
                    <View style={styles.socialLoginView}>
                        <TouchableOpacity style={styles.socialIcons}>
                            <Image
                                style={styles.SocialImage}
                                source={require("../../images/google.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIcons}>
                            <Image
                                style={{ ...styles.SocialImage, tintColor: "#0E3375" }}
                                source={require("../../images/mail.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIcons}>
                            <Image
                                style={styles.SocialImage}
                                source={require("../../images/facebook.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ marginBottom: 30 }}>
                <TermsAndCondition />
            </View>
        </SafeAreaView>
    )
};

const mapStateToProps = state => ({

});

const ActionCreators = Object.assign(
    {},
    { savePhoneNumber },
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneNumber)

