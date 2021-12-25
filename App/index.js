import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialScreen from './container/InitialScreen';
import PhoneNumber from "./container/PhoneNumber";
import OtpScreen from "./container/OtpScreen";
import SignUp from './container/SignUp';
import MoreDetails from './container/MoreDetails';

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="InitialScreen" component={InitialScreen} />
            <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="MoreDetails" component={MoreDetails} />
        </Stack.Navigator>
    );
}

export { RootStack };