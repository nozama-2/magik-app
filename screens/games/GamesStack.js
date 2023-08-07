import React, { useLayoutEffect } from "react";
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
import InfoModal from "./InfoModal";
import { useDispatch } from "react-redux";
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

// These are the imports for all the screens for the individual games
// There are currently 4
import TangramScreen from "./tangram/TangramScreen";


const Games = createStackNavigator();

const GamesStack = ({ route, navigation }) => {

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === 'InfoModal') {
          dispatch({ type: "disableBottomTabs" })
        } else {
            dispatch({ type: "enableBottomTabs" })
        }
      }, [route, navigation]);


    return (
        <Games.Navigator screenOptions={{ headerShown: false }}>

            {/* This is the main screen for the catalog of all the games */}
            <Games.Group>
                <Games.Screen name="Games" component={GamesScreen} />
            </Games.Group>

            {/* These are the screens for all the games */}
            <Games.Group>
                <Games.Screen name="Tangram" component={TangramScreen} />
            </Games.Group>

            {/* These are all the modals */}
           <Games.Group screenOptions={{
                presentation: 'modal',
                gestureResponseDistance: 1000, // default is 135
                cardStyle: {
                    backgroundColor:"transparent",
                    opacity:0.99
                }}
           }>
                <Games.Screen name="InfoModal" component={InfoModal} />
            </Games.Group>

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