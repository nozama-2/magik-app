import React from "react";
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Box, Text } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import { COLORS, icons, images } from "../../../constants";

const colorCatMap = {
  logic: COLORS.secondary,
  math: COLORS.peach,
  multi: COLORS.yellow,
};

const GameSelectCard = ({
  name,
  ageRangeStart,
  ageRangeEnd,
  category,
  selected,
  chosenGames,
  setChosenGames,
  isPaddingCard,
}) => {
  const e = {
    tangram: icons.tangramIcon,
    "matching shapes": icons.shapesIcon,
    numbers: icons.numbersIcon,
    battleship: icons.battleshipIcon,
  };

  return isPaddingCard ? (
    <View
      style={{
        ...styles.container,
        backgroundColor: "transparent",
      }}
    ></View>
  ) : (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: selected ? COLORS.white : COLORS.lightGray,
      }}
      onPress={() => {
        if (selected) {
          setChosenGames(chosenGames.filter((g) => g != name));
        } else {
          setChosenGames([...chosenGames, name]);
        }
      }}
    >
      {/* Action Button: Information buton to teach the player how to play the game */}
      <Box
        display="flex"
        flexDir="row"
        w="100%"
        px={1}
        py={1}
        pb={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Age range */}
        <Box
          borderRadius={6}
          borderWidth={1}
          borderColor={COLORS.darkgray}
          backgroundColor={COLORS.lightGray2}
          opacity={0.7}
          px={2}
          py={0.5}
        >
          <Text fontSize="12px">
            {ageRangeStart}-{ageRangeEnd} years
          </Text>
        </Box>

        <Box
          borderWidth="1.5"
          borderRadius={20}
          p={2}
          borderColor={selected ? COLORS.green : COLORS.gray}
        >
          <Icon name="check" color={selected ? COLORS.green : "transparent"} />
        </Box>
      </Box>

      {/* The Main Game Image Thumbnail */}
      <Image
        source={e[name.toLowerCase()]}
        resizeMode="contain"
        style={{
          marginTop: 0,
          alignSelf: "center",
          width: 50,
          height: 50,
        }}
      />

      {/* The Name of the game */}
      <Box
        height="80px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
      >
        <Text style={styles.containerHeader}>{name}</Text>
      </Box>

      {/* Category */}
      <Box
        borderRadius={10}
        backgroundColor={colorCatMap[category]}
        px={2}
        py={0.5}
      >
        <Text fontSize="12px" color={COLORS.white}>
          {category}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    alignItems: "center",
    width: Dimensions.get("window").width / 2 - 50,
    paddingBottom: 20,
    marginTop: 30,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { height: 0, width: 0 },
  },
  containerHeader: {
    color: COLORS.black,
    marginVertical: 10,
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
  },
  playButton: {
    height: 40,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameSelectCard;
