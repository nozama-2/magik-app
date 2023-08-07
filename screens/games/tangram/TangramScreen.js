import React from "react";
import { StyleSheet, SafeAreaView, View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { COLORS } from "../../../constants";
import { t } from 'react-native-tailwindcss';

import SearchBar from "./components/SearchBar";
import BackButton from "./components/BackButton";
import Spacer from "./components/Spacer";
import Button from "./components/Button";

const TangramScreen = ({route, navigation }) => {
    return (
            <SafeAreaView>
                <View style={[t.flex, t.flexCol]}>
                    <View style={[t.flex, t.flexRow, t.justifyBetween, t.mT8, t.mL6, t.z10, {alignItems: 'center'}]}>
                        <BackButton onPress={() => navigation.goBack()} />
                        <Text style={[styles.title, t.mB6, t.mL0]}>Tangram</Text>
                        <Spacer />
                    </View>
                    <View style={[t.p2, {display: 'flex', alignItems: "center"}]}>
                    
                      <SearchBar />

                        <ScrollView style={[t.wFull, t.mT4]} showsVerticalScrollIndicator={false}>
                        <View style={[t.wFull, t.flex1, t.justifyCenter, t.selfCenter]}>
                            <Text style={styles.subHeader}>Puzzles</Text>

                            {
                                Array.from(Array(10).keys()).map((e) => {
                                    return (
                                        <Button text={`Puzzle ${e + 1}`} icon="extension-puzzle-outline" onPress={() => console.log("")} />
                                    )
                                })
                            }
                        </View>
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
    subHeader: {
        fontFamily: "Poppins-SemiBold",
        marginBottom: 10,
        marginTop: 17,
        color: '#888899',
        marginHorizontal: 10,
    },
})

export default TangramScreen;