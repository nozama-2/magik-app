import React from "react";
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, icons, images } from "../../../constants";
import { t } from "react-native-tailwindcss";
import { Box, Text } from "native-base";

const colorCatMap = {
  logic: COLORS.secondary,
  math: COLORS.peach,
  multi: COLORS.yellow,
};

const GameCard = ({
  name,
  ageRangeStart,
  ageRangeEnd,
  category,
  imageUrl,
  purchased,
  price,
  info,
  themeColor,
  route,
  navigation,
}) => {
  const e = {
    tangram: icons.tangramIcon,
    "matching shapes": icons.shapesIcon,
    equations: icons.numbersIcon,
    battleship: icons.battleshipIcon,
    codecars: icons.codecarsIcon,
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (purchased) {
          navigation.push(name);
        } else {
          navigation.push("Purchase Game", { name });
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

        <TouchableOpacity
          onPress={() =>
            navigation.push("InfoModal", { name: name, info: info })
          }
        >
          <Image
            source={icons.infoIcon}
            resizeMode="contain"
            style={{
              marginTop: 0,
              alignSelf: "center",
              width: 25,
              height: 25,
              tintColor: COLORS.gray,
            }}
          />
        </TouchableOpacity>
      </Box>

      {/* The Main Game Image Thumbnail */}
      <Image
        source={e[name.toLowerCase()]}
        resizeMode="contain"
        style={{
          marginTop: 0,
          alignSelf: "center",
          width: 100,
          height: 100,
      
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

      {/* PLAY BUTTON */}
      <Box
        bg={{
          linearGradient: {
            colors: [COLORS.tomatoGradientLeft, COLORS.tomatoGradientRight],
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
          t.mT4,
          t.justifyCenter,
          styles.playButton,
          styles.shadow,
        ]}
      >
        {purchased ? (
          <Image
            source={icons.playIcon}
            resizeMode="contain"
            style={{
              alignSelf: "center",
              width: 20,
              height: 20,
              tintColor: COLORS.white,
            }}
          />
        ) : (
          <Text
            alignSelf="center"
            h="20px"
            color={COLORS.white}
            bold
            fontSize={15}
          >
            ${price}
          </Text>
        )}
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    alignItems: "center",
    width: Dimensions.get("window").width / 2 - 50,
    // margin: 10,
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

export default GameCard;
