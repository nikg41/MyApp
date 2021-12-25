import React from 'react';
import { Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';

const width = Dimensions.get("screen").width

const InitialScreen = (props) => (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
            <Text style={styles.headerText}>LFYD</Text>
        </View>
        <View style={styles.imageView}>
            <Image
                style={{ height: 300, width: width * 0.92 }}
                source={require("../../images/InitialScreen.png")}
            />
        </View>
        <View style={styles.bottomView}>
            <Text style={styles.title}>Never miss a sale</Text>
            <Text style={styles.description}>Any upcomming sale at your near mall and by your favourite brands. You will be the first to get the information.</Text>
        </View>
        <View style={styles.buttonView}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate("PhoneNumber")}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(InitialScreen);
