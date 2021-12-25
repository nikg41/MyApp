import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { ActionSheetStyles as styles } from "./styles";

const ActionSheet = (props) => {
    const { visible, options, onFirstOptionPress, onSecondOptionPress,
        onThirdOptionPress, onCancelPress, cancelLabel } = props;
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onCancelPress}
        >

            <TouchableOpacity
                onPress={onCancelPress}
                activeOpacity={1}
                style={styles.modalBackground}>

                <View style={styles.modalView}>

                    {options.map((item, index) => {
                        return (
                            <>
                                <TouchableOpacity
                                    style={styles.modalButtonBg}
                                    onPress={
                                        index === 0 ? onFirstOptionPress :
                                            index === 1 ? onSecondOptionPress :
                                                onThirdOptionPress
                                    }
                                >
                                    <Text style={styles.modalOptionsTextStyle}>{item}</Text>
                                </TouchableOpacity>
                                {index !== (options.length - 1) && <View style={styles.modalOptionDivider} />}
                            </>
                        )
                    })}

                </View>

                <View style={styles.cancelModalView}>
                    <TouchableOpacity style={styles.modalButtonBg} onPress={onCancelPress}>
                        <Text style={styles.modalCancelTextStyle}>{cancelLabel}</Text>
                    </TouchableOpacity>
                </View>

            </TouchableOpacity>

        </Modal>
    )
};

export default ActionSheet;
