import React from "react";
import { View, StyleSheet } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import HomeTitle from "./components/HomeTitle";
import Spacer from "./components/Spacer";
import FilterButton from "./components/FilterButton";
import Header from "./components/Header/Index";
import ScreentimeCard from "./components/ScreentimeCard/Index";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.containerHome}>
      <View style={styles.top}>
        <Spacer />
        <HomeTitle />
        <FilterButton onPress={() => navigation.push("Filters")} />
      </View>

      <Header />

      <ScreentimeCard />
    </View>
  );
};

const styles = StyleSheet.create({
  // CONTAINER - HOME
  containerHome: {
    marginHorizontal: 10,
    padding: 10,
  },
  top: {
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardStack: {
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default HomeScreen;
