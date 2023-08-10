import React from "react";
import { ArrowBackIcon, Box, Button, Spinner, Text } from "native-base";
import { Image, SafeAreaView } from "react-native";

import { gameInProgressGif } from "../../constants/images";
import { COLORS } from "../../constants";

const GameInProgress = ({ navigation, route }) => {
  const handleGameExit = () => {
    navigation.navigate("Games");
  };

  return (
    <SafeAreaView>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="90%"
      >
        <Image source={gameInProgressGif} style={{ width: 300, height: 300 }} />

        <Text color={COLORS.secondary} bold fontSize={30} mb={10}>
          Game in progress...
        </Text>

        <Button
          variant="outline"
          width="200px"
          onPress={handleGameExit}
          _pressed={{ opacity: 0.5, backgroundColor: "transparent" }}
        >
          <Box
            display="flex"
            flexDir="row"
            alignItems="center"
            justifyContent="center"
            w="200px"
            h="30px"
            px={2}
          >
            <ArrowBackIcon position="absolute" left={2} />
            <Text justifySelf="center" textAlign="center">
              Exit
            </Text>
          </Box>
        </Button>
      </Box>
    </SafeAreaView>
  );
};

export default GameInProgress;
