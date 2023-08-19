import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { View, Box, useDisclose, Avatar } from "native-base";

import HomeTitle from "./components/HomeTitle";
import Spacer from "./components/Spacer";
import { useSelector, useStore } from "react-redux";

import { t } from "react-native-tailwindcss";
import { COLORS, icons } from "../../constants";
import { Select } from "native-base";
import Chart from "./components/Chart/Index";
import ProfileActionsheet from "./components/ProfileActionsheet";
import HomeTopNavigator from "./navigation/HomeTopNavigator";

const HomeScreen = ({ navigation, route }) => {
  const getInitials = (name) => {
    let n = name.split(" ");
    let i = n.map((w) => w[0]);
    return i.join("").toUpperCase();
  };

  const profiles = { ...useStore().getState().children };

  const profileArr = Object.keys(profiles).map((x) => ({
    ...profiles[x],
    id: x,
  }));

  const { isOpen, onOpen, onClose } = useDisclose();
  const [selectedProfile, setSelectedProfile] = useState(profileArr[0]);

  const screenTime = [
    { number: 8, name: "Tangram", color: COLORS.blue },
    { number: 7, name: "Numbers", color: COLORS.purple },
    { number: 10, name: "Matching", color: COLORS.primary },
    { number: 23, name: "Battleship", color: COLORS.secondary },
    { number: 37, name: "Unused", color: COLORS.lightGray },
  ];

  return (
    <View style={styles.containerHome} onLayout={route.params.onLayoutRootView}>
      {/* This is the top section of the screen for title and action icons */}
      <View style={styles.top}>
        <Spacer />
        <HomeTitle />

        <TouchableOpacity onPress={onOpen}>
          {profiles[selectedProfile["id"]]["img"] ? (
            <Avatar
              size="40px"
              source={{ uri: profiles[selectedProfile["id"]]["img"] }}
            />
          ) : (
            <Avatar size="40px">{getInitials(selectedProfile.name)}</Avatar>
          )}
        </TouchableOpacity>

        {/* Dropdown to select profile */}
        <ProfileActionsheet
          isOpen={isOpen}
          onClose={onClose}
          selectedProfile={selectedProfile}
          profileArr={profileArr}
          setSelectedProfile={setSelectedProfile}
        />
      </View>

      {/* This is the main portion of the screen */}
      <View style={styles.mainContainer}>
        {/* This is going to be the main 2 sub sections */}
        <View style={[styles.horizontalContainer]}>
          {/* Left: Streaks */}
          <TouchableOpacity style={[styles.streaksContainer, styles.shadow]}>
            {/* The Streak text */}
            <Box
              bg={{
                linearGradient: {
                  colors: [COLORS.white, COLORS.white],
                  start: [0, 1],
                  end: [1, 0],
                },
              }}
              _text={{
                fontSize: "md",
                fontWeight: "medium",
                color: "warmGray.50",
                textAlign: "center",
              }}
              style={[
                t.flex,
                t.flexRow,
                styles.circleRounded,
                t.mT4,
                styles.shadow,
              ]}
            >
              <View
                style={[
                  t.flex,
                  t.flexCol,
                  styles.circleRounded,
                  styles.streaksPadding,
                ]}
              >
                <View style={[t.flex, t.flexRow]}>
                  <Text style={[styles.streakNumber]}>11</Text>
                  {/* The Streaks Icon Thumbnail */}
                  <Image
                    source={icons.streakCherry}
                    resizeMode="cover"
                    style={{
                      margin: 5,
                      alignSelf: "center",
                      width: 50,
                      height: 50,
                    }}
                  />
                </View>
                <Text style={[styles.streakSubtext]}>day streak!</Text>
              </View>
            </Box>
          </TouchableOpacity>

          {/* Second Row: Screentime */}

          {/* Screentime */}
          <TouchableOpacity style={[styles.screentimeContainer, styles.shadow]}>
            {/* The Streak text */}
            <Box
              bg={{
                linearGradient: {
                  colors: [COLORS.white, COLORS.white],
                  start: [1, 0],
                  end: [0, 1],
                },
              }}
              _text={{
                fontSize: "md",
                fontWeight: "medium",
                color: "warmGray.50",
                textAlign: "center",
              }}
              style={[
                t.flex,
                t.flexRow,
                styles.circleRounded,
                t.mT4,
                styles.shadow,
              ]}
            >
              <Chart data={screenTime} />
            </Box>
          </TouchableOpacity>
        </View>

        {/* Top Tabs Navigator */}
        <HomeTopNavigator navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { height: 1, width: 0 },
  },
  streaksContainer: {
    borderRadius: 1000,
    marginHorizontal: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  screentimeContainer: {
    borderRadius: 1000,
    margin: 10,
  },
  circleRounded: {
    borderRadius: 1000,
  },
  streaksPadding: {
    paddingHorizontal: 25,
    paddingVertical: 35,
  },
  badgesHeader: {
    fontFamily: "Poppins-Bold",
    fontSize: 26,
    marginVertical: 10,
    marginBottom: 25,
    fontWeight: 700,
    alignSelf: "center",
  },
  horizontalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
  containerHome: {
    marginHorizontal: 10,
    padding: 10,
  },
  mainContainer: {},
  childSelect: {
    marginTop: 15,
  },
  top: {
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  streakNumber: {
    color: COLORS.black,
    fontFamily: "Poppins-Bold",
    fontSize: 40,
    fontWeight: 700,
    alignSelf: "center",
  },
  streakSubtext: {
    color: COLORS.darkgray,
    alignSelf: "center",
    fontWeight: 500,
    fontSize: 15,
  },

  containerHeader: {
    color: COLORS.black,
    marginVertical: 10,
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    fontWeight: 700,
    alignSelf: "center",
  },
  playButton: {
    height: "20%",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: "100%",
  },
  favGame: {
    backgroundColor: COLORS.secondary,

    alignSelf: "center",
    justifyContent: "center",
    height: "25%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: "100%",
    position: "static",
    top: 0,
  },
  favGameText: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    fontWeight: 700,
    color: COLORS.white,
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
