import React, { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    TextInput,
    BackHandler
} from 'react-native';
import styles from "./styles";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';;
import TermsAndCondition from '../../components/TermsAndCondition';
import Header from '../../components/Header';
import { isEmpty } from 'ramda';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const genderList = ["Male", "Female", "Other"];

const MoreDetails = (props) => {
    const [gender, setGender] = useState('');
    const [genderError, setGenderError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(props.userDetails.phoneNumber);
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [genderModalVisible, setGenderModalVisible] = useState(false);

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

    const handleNavigation = () => {
        const MOBILE_PATTERN = new RegExp('^[6-9][0-9]{9}$');
        const emailRegex =
            new RegExp("/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$");
        if (!isEmpty(gender) && !isEmpty(phoneNumber) && !isEmpty(email)) {
            setPhoneNumberError('');
            setGenderError('');
            setEmailError('');
        }
        else {
            if (phoneNumber.trim().length === 0) {
                setPhoneNumberError("Please enter your phone number.")
            } else if (!MOBILE_PATTERN.test(phoneNumber)) {
                setPhoneNumberError("Please enter valid phone number.")
            }
            if (email.trim().length === 0) {
                setEmailError("Please enter your email.")
            } else if (!emailRegex.test(email)) {
                setEmailError("Please enter valid email.")
            }
            if (gender.length === 0) {
                setGenderError('Please select your gender');
            }
        }
    }

    const genderModal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={genderModalVisible}
                onRequestClose={() => setGenderModalVisible(false)}
            >
                <TouchableOpacity
                    onPress={() => setGenderModalVisible(false)}
                    style={styles.genderModalBg}
                    activeOpacity={1}>
                    <TouchableOpacity style={styles.genderModalView} activeOpacity={1}>
                        {genderList.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <TouchableOpacity

                                        style={styles.genderModalOptionView}
                                        onPress={() => {
                                            setGender(item);
                                            setGenderModalVisible(false);
                                        }}>
                                        <Text style={styles.genderModalOptionText}>
                                            {item}
                                        </Text>
                                    </TouchableOpacity>
                                    {index !== (genderList.length - 1) &&
                                        <View style={styles.genderModalOptionDivider} />
                                    }
                                </React.Fragment>
                            )
                        })
                        }
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Header
                        title="A few more details"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi tempor arcu id justo congue."
                        backVisible={false}
                    />
                    <View style={styles.pictureView}>
                        <Text style={styles.headingText}>Gender</Text>
                        <TouchableOpacity
                            onPress={() => {
                                setGenderModalVisible(true);
                                setGenderError('');
                            }}
                            style={[styles.genderButton]}>
                            <Text
                                style={isEmpty(gender) ? styles.genderEmptytext : styles.genderText}>
                                {isEmpty(gender) ? "Select Gender" : gender}</Text>
                            <Icon
                                name="chevron-down"
                                size={20}
                                color="#0E3067"
                            />
                        </TouchableOpacity>
                        {!isEmpty(genderError) && <Text style={styles.errorText}>{genderError}</Text>}
                    </View>
                    <View style={styles.pictureView}>
                        <Text style={styles.headingText}>Email Address</Text>
                        <View style={styles.phoneNumberView}>
                            <TextInput
                                style={{ color: "#484C4D" }}
                                value={email}
                                placeholder='Your email address'
                                placeholderTextColor="#627177"
                                keyboardType='default'
                                onEndEditing={(event) => {
                                    setEmail(email.trim())
                                }}
                                onChangeText={(value) => {
                                    setEmail(value);
                                    setEmailError('');
                                }}
                                maxLength={100} />
                        </View>
                        {!isEmpty(emailError) && <Text style={styles.errorText}>{emailError}</Text>}
                    </View>
                    <View style={styles.pictureView}>
                        <Text style={styles.headingText}>Phone Number</Text>
                        <View style={styles.phoneNumberView}>
                            <TextInput
                                style={{ color: "#484C4D" }}
                                value={phoneNumber}
                                placeholder='Your 10-digit phone number'
                                placeholderTextColor="#627177"
                                keyboardType='default'
                                editable={isEmpty(phoneNumber)}
                                onEndEditing={(event) => {
                                    setPhoneNumber(phoneNumber.trim())
                                }}
                                onChangeText={(value) => {
                                    setPhoneNumber(value);
                                    setPhoneNumberError('');
                                }}

                                maxLength={10} />
                        </View>
                        {!isEmpty(phoneNumberError) && <Text style={styles.errorText}>{phoneNumberError}</Text>}
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            onPress={handleNavigation}
                            style={styles.button}>
                            <Text style={styles.buttonText}>{"Create new account"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: 30 }}>
                    <TermsAndCondition />
                </View>
            </KeyboardAwareScrollView>

            {genderModal()}
        </SafeAreaView>
    )
};

const mapStateToProps = state => ({
    userDetails: state.userDetails
});


const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MoreDetails)

