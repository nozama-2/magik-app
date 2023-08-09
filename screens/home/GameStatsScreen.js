import React from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import { Icon } from "react-native-elements";
import { t } from "react-native-tailwindcss";
import { COLORS } from '../../constants';
import BackButton from './components/BackButton';
import Spacer from './components/Spacer';

function GameStatsScreen({ route, navigation }) {

    const { name } = route.params;

    return (
        <SafeAreaView style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
            <View style={styles.modalContainer}>
                <View style={[t.flex, t.flexRow, t.justifyBetween,t.mT8, t.mL6, t.z10, {alignItems: 'center'}]}>
                    <BackButton onPress={() => navigation.goBack()} />
                    <Text style={[t.textGray800, styles.header]}>{ name }</Text>
                    <Spacer />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        position: "absolute",
        width: "100%",
        backgroundColor: COLORS.white,
        borderRadius: 25,
        paddingBottom: 150,
    },
    header: {
        fontFamily: "Poppins-Bold",
        fontSize: 20,
    },
    subHeader: {
        fontFamily: "Poppins-Regular",
        marginBottom: 10,
        marginTop: 17,
        color: '#888899',
        marginLeft: 3,
    },
    container: {
        width: "80%"
    },
    text: {
        color: '#9999AA',
        fontFamily: 'Poppins-Normal'
    },
    individualRow: {
        height: 54,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 14,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        paddingHorizontal: 20
    }
});

export default GameStatsScreen;