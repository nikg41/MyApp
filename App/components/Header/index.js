import React, { Fragment } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icons from "react-native-vector-icons/AntDesign";
import { isEmpty } from 'ramda';
const Header = ({
    title,
    description,
    secDescription = '',
    onClick,
    backVisible = true }
) => (
    <Fragment>
        {backVisible && <View style={styles.headerView}>
            <TouchableOpacity
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                onPress={() => onClick()}>
                <Icons
                    name="left"
                    size={25}
                    color="#627177"
                />
            </TouchableOpacity>
        </View>}
        <View style={styles.textView}>
            <Text style={styles.heading}>{title}</Text>
            <Text style={[styles.headingText, { marginTop: 20 }]}>{description}</Text>
            {!isEmpty(secDescription) && <Text style={styles.headingText}>{secDescription}</Text>}
        </View>
    </Fragment>
);

export default Header;
