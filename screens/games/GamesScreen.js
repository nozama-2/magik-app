import React from "react";
import { StyleSheet, SafeAreaView, View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { COLORS, images } from '../../constants/theme';
import { t } from 'react-native-tailwindcss';

import SearchBar from "./components/SearchBar";
import GameCard from "./components/GameCard";

const games = [
    {
        name: "Matching Shape",
        themeColor: COLORS.primary,
        imageUrl: 'assets/images/games_images/tangram.png',
        info: "Match the Shape in the corresponding box! When there multiple shapes, place each shape into its cutout!"
    },
    {
        name: "Tangram",
        themeColor: COLORS.secondary,
        imageUrl: 'assets/images/games_images/tangram.png',
        info: "Tangram! Insert each piece one by one into the cutout, until it fits perfectly."
    },
    {
        name: "Numbers",
        themeColor: COLORS.secondary,
        imageUrl: 'assets/images/games_images/tangram.png',
        info: "Place the numbers in each blank! Make sure all the equations add up!"
    },
    {
        name: "Battleship",
        themeColor: COLORS.secondary,
        imageUrl: 'assets/images/games_images/tangram.png',
        info: "Place your ships on your side of the screen. Try and sink your opponents ships at the same time!"
    },
]

const GamesScreen = ({route, navigation }) => {
    const splitIntoTwo = (array) => {
        const newArray  = []
        for (let i = 0; i < array.length - 1; i+=2) {
            newArray.push([array[i], array[i + 1]])
        }
        return newArray
    }
    return (
            <SafeAreaView>
                <View style={[t.flex, t.flexCol]}>
                    <Text style={[styles.title]}>My Games</Text>
                    <View style={[t.p2, {display: 'flex', alignItems: "center"}]}>
                    
                      <SearchBar />

                    {/* Collection of Games in the form of Cards in rows of 2 */}

                    <ScrollView style={[t.wFull]} showsVerticalScrollIndicator={false}>
                        {
                            splitIntoTwo(games).map(element => (
                                <View style={[t.flex1, t.flexRow, t.justifyCenter]}>
                                    <GameCard {...element[0]} route={route} navigation={navigation} />
                                    <GameCard {...element[1]} route={route} navigation={navigation} />
                                </View>
                            ))
                        }
                        {
                            games.length % 2 ?
                            (
                                <View style={[t.flex1, t.flexRow, t.justifyCenter]}>
                                    <GameCard {...games[0]} route={route} navigation={navigation} />
                                    <View style={{
                                        alignItems: "center",
                                        width: Dimensions.get('window').width / 2 - 50,
                                        margin: 10,
                                        marginTop: 30
                                    }}>
                                </View>

                                </View>
                            ) : 
                            (
                                <View></View>
                            )
                        }
                      </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "Poppins-Bold",
        fontSize: 35,
        fontWeight: 700,
        alignSelf: 'flex-start',
        color: COLORS.black,
        paddingLeft: 20,
        paddingTop: 30,
    },
    text: {
        fontFamily: "Poppins-Medium",
        fontSize: 12,
        alignSelf: 'center',
    },
})

export default GamesScreen;