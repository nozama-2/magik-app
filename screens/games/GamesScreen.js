import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { COLORS } from '../../constants/theme';
import { t } from 'react-native-tailwindcss';
import SearchBar from "./components/SearchBar";

const GamesScreen = () => {
    return (
            <SafeAreaView>
                <View style={[t.flex, t.flexCol]}>
                    <Text style={[styles.title]}>This is the Games Screen</Text>

                    <View style={[t.p2, {display: 'flex', alignItems: "center"}]}>
                      <SearchBar />
                    </View>
                </View>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "Poppins-Bold",
        fontSize: 35,
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