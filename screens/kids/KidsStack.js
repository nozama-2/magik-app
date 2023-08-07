import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    Animated
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';

import KidsScreen from './KidsScreen';

const Kids = createStackNavigator();

const KidsStack = () => {

    return (
        <Kids.Navigator screenOptions={{ headerShown: false }}>
           <Kids.Screen name="Kids" component={KidsScreen} />
        </Kids.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
})

export default KidsStack;