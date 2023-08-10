import React from "react";
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import ListItem from './components/ListItem';
import { t } from 'react-native-tailwindcss';

const GamesList = ({ route, navigation }) => {
    return (
        <View>
            <ScrollView style={[t.hFull, styles.scrollableGamesList]}>
                <ListItem name="Tangram" rank="98723" rating={1580} navigation={navigation}  />
                <ListItem name="Matching Shapes" rank="123872" rating={1480} navigation={navigation}  />
                <ListItem name="Battleship" rank="134372" rating={1380} navigation={navigation} />
            </ScrollView>
        </View>
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
    },
    scrollableGamesList: {
        marginTop: 30,
    }
})

export default GamesList;