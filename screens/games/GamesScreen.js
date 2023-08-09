import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { COLORS } from "../../constants/theme";
import { Center, ScrollView, Box } from "native-base";
import { t } from "react-native-tailwindcss";

import SearchBar from "./components/SearchBar";
import DailyChallenge from "./components/DailyChallenge";
import GamesView from "./components/GamesView";

const games = [
  {
    name: "Matching Shape",
    themeColor: COLORS.primary,
    imageUrl: "assets/images/games_images/tangram.png",
    info: "Match the Shape in the corresponding box! When there multiple shapes, place each shape into its cutout!",
  },
  {
    name: "Tangram",
    themeColor: COLORS.secondary,
    imageUrl: "assets/images/games_images/tangram.png",
    info: "Tangram! Insert each piece one by one into the cutout, until it fits perfectly.",
  },
  {
    name: "Numbers",
    themeColor: COLORS.secondary,
    imageUrl: "assets/images/games_images/tangram.png",
    info: "Place the numbers in each blank! Make sure all the equations add up!",
  },
  {
    name: "Battleship",
    themeColor: COLORS.secondary,
    imageUrl: "assets/images/games_images/tangram.png",
    info: "Place your ships on your side of the screen. Try and sink your opponents ships at the same time!",
  },
];

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
            <ScrollView w="100%" px={2} showsVerticalScrollIndicator={false}>
              {/* Daily challenge */}
              <DailyChallenge
                challengesCompleted={challengesCompleted}
                totalChallenges={totalChallenges}
              />

              {/* Collection of Games in the form of Cards in rows of 2 */}
              <GamesView navigation={navigation} route={route} games={games} />
            </ScrollView>
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
