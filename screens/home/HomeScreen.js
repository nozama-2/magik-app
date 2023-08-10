import React from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { View, Box } from "native-base";

import HomeTitle from "./components/HomeTitle";
import Spacer from "./components/Spacer";
import FilterButton from "./components/FilterButton";

import { t } from "react-native-tailwindcss";
import { COLORS, icons } from "../../constants";
import { Select } from "native-base";
import Chart from "./components/Chart/Index";

import HomeTopNavigator from "./navigation/HomeTopNavigator";

const HomeScreen = ({ navigation }) => {


  const screenTime = [
    { number: 8, name: "Tangram", color: COLORS.blue },
    { number: 7, name: "Numbers", color: COLORS.purple },
    { number: 10, name: "Matching", color: COLORS.primary },
    { number: 23, name: "Battleship", color: COLORS.secondary },
    { number: 37, name: "Unused", color: COLORS.lightGray },
  ];


  const [child, setChild] = React.useState("");

  return (
    <View style={styles.containerHome}>
      {/* This is the top section of the screen for title and action icons */}
      <View style={styles.top}>
        <Spacer />
        <HomeTitle />
        <Spacer />
      </View>

      {/* This is the main portion of the screen */}
      <View style={styles.mainContainer}>
        {/* This is where you are going to select the children */}
        <View style={styles.childSelect}>
          <Select
            selectedValue={child}
            minWidth="200"
            accessibilityLabel="Select Child"
            placeholder="Select Child"
            _selectedItem={{ bg: "teal.600" }}
            mt={1}
            onValueChange={(itemValue) => setChild(itemValue)}
          >
            <Select.Item label="Samantha" value="ux" />
            <Select.Item label="Jane Doe" value="web" />
            <Select.Item label="Johnny Smith" value="cross" />
          </Select>
        </View>
      
        {/* This is going to be the main 2 sub sections */}
        <View style={[styles.horizontalContainer]}>
          {/* Left: Streaks */}
          <TouchableOpacity style={[styles.streaksContainer, styles.shadow]}>
            {/* The Streak text */}
            <Box
                bg={{
                  linearGradient: {
                    colors: ["lightBlue.500", "violet.500"],
                    start: [1, 0],
                    end: [0, 1]
                  }
                }}
                _text={{
                  fontSize: "md",
                  fontWeight: "medium",
                  color: "warmGray.50",
                    textAlign: "center"
                  }}
                  style={[t.flex, t.flexRow, styles.circleRounded, t.mT4, styles.shadow]}
                >

              <View style={[t.flex, t.flexCol, styles.circleRounded, styles.streaksPadding]}>
                <View style={[t.flex,t.flexRow]}>
                  <Text style={[styles.streakNumber]}>11</Text>
                    {/* The Streaks Icon Thumbnail */}
                    <Image
                      source={icons.streaksIcon}
                      resizeMode="contain"
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
                    colors: ["red.400", "violet.400"],
                    start: [1, 0],
                    end: [0, 1]
                  }
                }}
                _text={{
                  fontSize: "md",
                  fontWeight: "medium",
                  color: "warmGray.50",
                    textAlign: "center"
                  }}
                  style={[t.flex, t.flexRow, styles.circleRounded, t.mT4, styles.shadow]}
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
    alignSelf: 'center',
    justifyContent: 'center',
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
    alignSelf: 'center'
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
    color: COLORS.white,
    fontFamily: "Poppins-Bold",
    fontSize: 40,
    fontWeight: 700,
    alignSelf: "center",
  },
  streakSubtext: {
    color: COLORS.white,
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
