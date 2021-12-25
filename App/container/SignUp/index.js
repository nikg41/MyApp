import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Modal, TextInput, Dimensions, BackHandler } from 'react-native';
import styles from "./styles";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';;
import TermsAndCondition from '../../components/TermsAndCondition';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from "react-native-image-crop-picker";
import ActionSheet from '../../components/ActionSheet';
import { isEmpty } from 'ramda';
import moment from "moment";
import DatePicker from "react-native-date-picker";
import { saveUserDetails } from '../../actions/index';
const screenWidth = Dimensions.get('window').width;

const SignUp = (props) => {
    const [name, setName] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const [image, setImage] = useState({});
    const [dobModalVisible, setDobModalVisible] = useState(false);
    const [dob, setDob] = useState('');
    const [dobError, setDobError] = useState('');
    const [nameError, setNameError] = useState('');

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

    const scaleSizeW = (number) => {
        const designWidth = 375.0;
        const scale = screenWidth / designWidth;
        return number * scale;
    }

    const showCamera = () => {
        ImagePicker.openCamera({
            width: scaleSizeW(268),
            height: scaleSizeW(358),
            compressImageMaxWidth: scaleSizeW(268),
            compressImageMaxHeight: scaleSizeW(358),
            useFrontCamera: true,
            includeBase64: true,
            compressImageQuality: 1,
            mediaType: "photo",
        })
            .then(imageCallbackHandler)
            .catch(error => {
                if (error.code !== "E_PICKER_CANCELLED") {
                }
            });
    }

    const showGallery = () => {
        ImagePicker.openPicker({
            width: scaleSizeW(268),
            height: scaleSizeW(358),
            compressImageMaxWidth: scaleSizeW(268),
            compressImageMaxHeight: scaleSizeW(358),
            includeBase64: true,
            compressImageQuality: 1,
            mediaType: "photo",
        })
            .then(imageCallbackHandler)
            .catch(error => {
                if (error.code !== "E_PICKER_CANCELLED") {

                }
            });
    }

    const imageCallbackHandler = (image) => {
        setImage(image);
        setShowPicker(false);
    }

    const dobModal = () => {
        return (
            <Modal
                visible={dobModalVisible}
                transparent={true}
            >
                <View style={styles.modalContainerStyle}>
                    <View style={styles.modalWrapperStyle}>
                        <View style={styles.modalDoneButtonContainerStyle}>
                            <TouchableOpacity
                                style={styles.modalDoneButtonStyle}
                                onPress={() => {
                                    setDobModalVisible(false);
                                }}
                            >
                                <Text style={styles.modalDoneTextStyle}>
                                    {"Done"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <DatePicker
                            mode="date"
                            date={
                                new Date(
                                    (!isEmpty(dob)
                                        ? dob
                                        : moment().add(-10, "y").format("DD/MM/YYYY")
                                    )
                                        .split("/")
                                        .reverse()
                                        .join("/")
                                )
                            }
                            onDateChange={date => {
                                onDOBDatePicked(date);
                            }}
                            minimumDate={moment().add(-100, "y").toDate()}
                            maximumDate={moment().add(-10, "y").toDate()}
                        />
                    </View>
                </View>
            </Modal>
        )
    }

    const onDOBDatePicked = (date) => {
        const newDate = moment(date).format("DD/MM/YYYY");
        setDob(newDate);
    }

    const nextButtonHandler = () => {
        if (!isEmpty(name.trim()) && !isEmpty(dob)) {
            props.actions.saveUserDetails({
                name: name,
                profilePic: image,
                dob: dob,
            })
            props.navigation.navigate("MoreDetails");
        }
        else {
            if (isEmpty(name.trim())) {
                setNameError("Please enter your name")
            }
            if (isEmpty(dob)) {
                setDobError("Please enter your dob")
            }
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header
                    title="SignUp."
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi tempor arcu id justo congue."
                    backVisible={false}
                />
                <View style={styles.pictureView}>
                    <Text style={styles.headingText}>Profile Picture <Text style={{ color: "#627177" }}>(Optional)</Text></Text>
                    <TouchableOpacity
                        onPress={() => setShowPicker(true)}
                        style={styles.uploadButton}>
                        <Icon
                            name="cloud-upload-outline"
                            size={20}
                            color="#0E3067"
                        />
                        <Text style={styles.uploadText}>Upload Picture</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pictureView}>
                    <Text style={styles.headingText}>Name</Text>
                    <View style={styles.phoneNumberView}>
                        <TextInput
                            style={{ color: "#484C4D" }}
                            value={name}
                            placeholder='Your name'
                            placeholderTextColor="#627177"
                            keyboardType='default'
                            onEndEditing={(event) => {
                                setName(name.trim())
                            }}
                            onChangeText={(value) => {
                                setName(value);
                                setNameError('');
                            }}
                            maxLength={40} />
                    </View>
                    {!isEmpty(nameError) && <Text style={styles.errorText}>{nameError}</Text>}
                </View>
                <View style={styles.pictureView}>
                    <Text style={styles.headingText}>Date of Birth</Text>
                    <TouchableOpacity
                        onPress={() => {
                            setDobModalVisible(true);
                            setDobError('');
                        }}
                        style={[styles.dobButton]}>
                        <Text style={isEmpty(dob) ? styles.dobEmptytext : styles.dobText}>{isEmpty(dob) ? "DD/MM/YYYY" : dob}</Text>
                        <Icon
                            name="chevron-down"
                            size={20}
                            color="#0E3067"
                        />
                    </TouchableOpacity>
                    {!isEmpty(dobError) && <Text style={styles.errorText}>{dobError
                    }</Text>}
                </View>
                <View style={styles.pictureView}>
                    <TouchableOpacity
                        onPress={nextButtonHandler}
                        style={[styles.nextButton]}>
                        <Text style={styles.nextText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginBottom: 30 }}>
                <TermsAndCondition />
            </View>
            {showPicker && <ActionSheet
                visible={showPicker}
                options={["Take Photo", "Gallery"]}
                onFirstOptionPress={() => showCamera()}
                onSecondOptionPress={() => showGallery()}
                cancelLabel={"Cancel"}
                onCancelPress={() => {
                    setShowPicker(false);
                }}
            />}
            {dobModal()}
        </SafeAreaView>
    )
};

const mapStateToProps = state => ({

});

const ActionCreators = Object.assign(
    {},
    { saveUserDetails },
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

