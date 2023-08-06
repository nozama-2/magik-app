import React from 'react';
import { t } from 'react-native-tailwindcss';
import { View, Text, StyleSheet } from 'react-native';

const HomeTitle = () => {
    return (
        <View style={[t.flex, t.flexCol]}>
            <Text style={[t.textGray800, styles.title]}>Discover</Text>
            <Text style={[t.textGray800, styles.text]}>Bishan</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "Poppins-Bold",
        fontSize: 20,
        alignSelf: 'center',
    },
    text: {
        fontFamily: "Poppins-Medium",
        fontSize: 12,
        alignSelf: 'center',
    },
})


export default HomeTitle;