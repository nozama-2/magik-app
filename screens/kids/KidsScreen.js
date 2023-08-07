import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { COLORS } from '../../constants/theme';
import { t } from 'react-native-tailwindcss';

const KidsScreen = () => {
    return (
            <SafeAreaView>
                <View style={[t.flex, t.flexCol]}>
                    <Text style={[styles.title]}>My Kids</Text>
                </View>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "Poppins-Bold",
        fontSize: 35,
        fontWeight: 300,
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

export default KidsScreen;