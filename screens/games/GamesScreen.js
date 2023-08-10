import React from "react";
import { StyleSheet, SafeAreaView, View, Text, Dimensions } from "react-native";
import { COLORS } from "../../constants/theme";
import { Center, ScrollView, Box } from "native-base";
import { t } from "react-native-tailwindcss";

import SearchBar from "./components/SearchBar";
import DailyChallenge from "./components/DailyChallenge";
import GamesView from "./components/GamesView";
import { useStore } from "react-redux";

const challengesCompleted = 1;
const totalChallenges = 3;

const GamesScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <View style={[t.flex, t.flexCol]}>
        <Text style={[styles.title]}>My Games</Text>
        <View style={[t.p2, { display: "flex", alignItems: "center" }]}>
          <SearchBar />

          <Center w="100%" px={3}>
            {/* Daily challenge */}
            <DailyChallenge
              challengesCompleted={challengesCompleted}
              totalChallenges={totalChallenges}
            />

            {/* Collection of Games in the form of Cards in rows of 2 */}
            <GamesView navigation={navigation} route={route} />
          </Center>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 35,
    fontWeight: 700,
    alignSelf: "flex-start",
    color: COLORS.black,
    paddingLeft: 20,
    paddingTop: 30,
  },
  text: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    alignSelf: "center",
  },
});

export default GamesScreen;
