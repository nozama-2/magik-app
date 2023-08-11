import React from "react";
import { ArrowBackIcon, Box, Button, Spinner, Text } from "native-base";
import { Image, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";

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

        <Text color={COLORS.black} style={{fontFamily: "Poppins-Bold"}} fontSize={30} mt={10} mb={10}>
          Game in progress...
        </Text>

          
          <TouchableOpacity style={styles.exitButton} onPress={handleGameExit}>
            <ArrowBackIcon position="absolute" left={4} color="white" />
            <Text justifySelf="center" textAlign="center" style={styles.exitText}>
                Exit
            </Text>
          </TouchableOpacity>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exitButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
  },
  exitText: {
    fontFamily: "Poppins-Bold",
    color: COLORS.white,
    fontSize: 14,
  }
})

export default GameInProgress;
