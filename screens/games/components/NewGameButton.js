import React from "react";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Button, Box, Text } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import { COLORS } from "../../../constants";
import { t } from "react-native-tailwindcss";

const NewGameButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        bg={{
          linearGradient: {
            colors: ["red.500", "violet.500"],
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
          t.mT1,
          styles.shadow,
          styles.newGameButton,
        ]}
      >
        <Icon name="gamepad" size={30} color={COLORS.white} />
        <Text color={COLORS.white} fontSize={30} bold ml={3}>
          New Game
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { height: 1, width: 0 },
  },
  newGameButton: {
    padding: 10,
    borderRadius: 8,
    width: Dimensions.get("window").width - 50,
    alignSelf: "center",
    justifyContent: "center",
  },
});
export default NewGameButton;
