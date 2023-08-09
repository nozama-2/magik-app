import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { COLORS, icons } from "../../constants";
const BadgesSubscreen = ({ route, navigation }) => {
    return (
        <View>
            <ScrollView style={styles.badgesHorizontal} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {Array.from(Array(2).keys()).map((e) => (
                        <>
                        <Image
                            source={icons.redBadgeIcon}
                            resizeMode="contain"
                            style={{
                            alignSelf: "center",
                            width: 90,
                            height: 90,
                            }}
                        />
                        <Image
                            source={icons.blueBadgeIcon}
                            resizeMode="contain"
                            style={{
                            alignSelf: "center",
                            width: 90,
                            height: 90,
                            }}
                        />
                        <Image
                            source={icons.greenBadgeIcon}
                            resizeMode="contain"
                            style={{
                            alignSelf: "center",
                            width: 90,
                            height: 90,
                            }}
                        />
                        </>
                    ))}
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
    badgesHorizontal: {
        marginTop: 30,
    }
})

export default BadgesSubscreen;