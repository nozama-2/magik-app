import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { t } from "react-native-tailwindcss";
import { ScrollView, Text, Box } from "native-base";

import { COLORS } from "../../../constants";
import BackButton from "./components/BackButton";
import Spacer from "./components/Spacer";
import NewGameButton from "./components/NewGameButton";
import RatingTitle from "./components/RatingTitle";
import PastPuzzles from "./components/PastGames";

const TangramScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <View style={[t.flex, t.flexCol]}>
        <View
          style={[
            t.flex,
            t.flexRow,
            t.justifyBetween,
            t.mT8,
            t.mL6,
            t.z10,
            { alignItems: "center" },
          ]}
        >
          <BackButton onPress={() => navigation.goBack()} />
          <Text style={[styles.title, t.mB6, t.mL0]}>Tangram</Text>
          <Spacer />
        </View>
        <View style={[t.p2, { display: "flex", alignItems: "center" }]}>
          <RatingTitle rating="1560" />

          <NewGameButton />

          <PastPuzzles />
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

export default TangramScreen;
