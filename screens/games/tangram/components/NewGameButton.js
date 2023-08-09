import React from "react";
import { Button, Box, Text } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import { COLORS } from "../../../../constants";

const NewGameButton = ({}) => {
  return (
    <Button
      width="90%"
      backgroundColor={COLORS.secondary}
      color={COLORS.white}
      py={5}
      borderRadius={10}
    >
      <Box display="flex" flexDir="row" alignItems="center">
        <Icon name="gamepad" size={30} color={COLORS.white} />
        <Text color={COLORS.white} fontSize={30} bold ml={3}>
          New Game
        </Text>
      </Box>
    </Button>
  );
};

export default NewGameButton;
