import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";


const TermsAndCondition = (props) => (
    <View style={styles.termsView}>
        <Text style={styles.continuingText}>By continuing you agree to our </Text>
        <Text style={styles.termsText}>{"Terms & Conditions"}</Text>
    </View>
);

export default TermsAndCondition;
