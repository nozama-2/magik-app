import React, { Fragment, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { t } from "react-native-tailwindcss";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../../../constants';

function Button(props) {
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: "#F6F6F6" }]}
            onPress={props.onPress}>
            <View style={[t.w1_6, t._mL2]}>
                <Icon name="puzzle-piece" size={20} color="#9999aa" />
            </View>
            <View style={[t.justifyStart, t.w4_6, t.mR8]}>
                <Text style={[styles.text, { color: '#888899', }]}> {props.text}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#9999aa" />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    header: {
        fontFamily: "Poppins-Bold"
    },
    iconColor: {
        color: '#888899'
    },
    text: {
        fontFamily: 'Poppins-SemiBold',
        color: COLORS.black,
        fontWeight: 500,
    },
    container: {
        height: 54,
        flexDirection: 'row',
        marginHorizontal: 10,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 0.5,
        borderRadius: 14,
        marginBottom: 5,
    }
})

export default Button;