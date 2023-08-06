import React from "react";
import { View, StyleSheet } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeTitle from './components/HomeTitle';
import Card from './components/Card';
import Spacer from './components/Spacer';
import FilterButton from './components/FilterButton';
import CardItem from './components/CardItem';
import Demo from './data/demo.js';


const HomeScreen = ({ navigation }) => {

    const swiper = React.useRef();
    const handleOnSwipedLeft = () => swiper.current.swipeLeft();
    const handleOnSwipedRight = () => swiper.current.swipeRight();
    
    return (
            <View style={styles.containerHome}>
                <View style={styles.top}>
                    <Spacer />
                    <HomeTitle />
                    <FilterButton onPress={() => navigation.push("Filters")}
                    />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    // CONTAINER - HOME
	containerHome: {
		marginHorizontal: 10,
		padding: 10,
	},
    top: {
		paddingTop: 50,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
    cardStack: {
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
});

export default HomeScreen;