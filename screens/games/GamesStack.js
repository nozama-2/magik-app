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

import GamesScreen from './GamesScreen';

const Games = createStackNavigator();

const GamesStack = () => {

    return (
        <Games.Navigator screenOptions={{ headerShown: false }}>
           <Games.Screen name="Games" component={GamesScreen} />
        </Games.Navigator>
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

export default GamesStack;