import React, { useLayoutEffect } from "react";
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import HomeScreen from './HomeScreen';
import FiltersScreen from './FiltersScreen';
import { useDispatch } from "react-redux";

const Home = createStackNavigator();

const HomeStack = ({ route, navigation }) => {
    
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === 'Filters') {
          dispatch({ type: "disableBottomTabs" })
        } else {
            dispatch({ type: "enableBottomTabs" })
        }
      }, [route, navigation]);

    return (
        <Home.Navigator screenOptions={{ headerShown: false }}>
            <Home.Group>
                <Home.Screen name="Home" component={HomeScreen} />
            </Home.Group>
           <Home.Group screenOptions={{
                presentation: 'modal',
                gestureResponseDistance: 1000, // default is 135
                cardStyle: {
                    backgroundColor:"transparent",
                    opacity:0.99
                }}
           }>
                <Home.Screen name="Filters" component={FiltersScreen} />
            </Home.Group>
        </Home.Navigator>
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

export default HomeStack;