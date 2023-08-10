import React from "react";
import { SafeAreaView, Image } from "react-native";
import { Box, Text, Button } from "native-base";
import { COLORS } from "../../constants";
import {
  tangramIcon,
  numbersIcon,
  battleshipIcon,
} from "../../constants/icons";
import { useStore } from "react-redux";

const PiecesModal = ({ route, navigation }) => {
  const pieceImgMapping = {
    "Shape Piece": tangramIcon,
    "Number Blocks": numbersIcon,
    Ships: battleshipIcon,
  };

  const name = route.params.name;
  const game = useStore()
    .getState()
    .games.filter((x) => x.name == name)[0];

  const handleStartGame = () => {
    // Start the game here
    navigation.navigate("In Progress", { name });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        backgroundColor={COLORS.white}
        display="flex"
        alignItems="center"
        w="80%"
        borderRadius={20}
        px="20px"
        py="30px"
      >
        <Text w="100%" textAlign="left" fontSize={20} bold>
          For {name}, you need...{" "}
        </Text>

        <Box
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
        >
          <Text fontSize={18} mb={3} underline>
            {game.piece}
          </Text>
          <Image
            source={pieceImgMapping[game.piece]}
            style={{
              width: 150,
              height: 150,
              objectFit: "contain",
              marginBottom: 30,
            }}
          />
        </Box>

        <Box
          display="flex"
          flexDir="row"
          justifyContent="space-between"
          w="100%"
        >
          <Button
            w="40%"
            backgroundColor={COLORS.gray}
            _text={{ color: COLORS.black }}
            onPress={() => {
              navigation.goBack();
            }}
            _pressed={{
              opacity: 0.5,
            }}
          >
            Cancel
          </Button>
          <Button
            w="55%"
            backgroundColor={COLORS.secondary}
            _text={{ bold: true }}
            onPress={handleStartGame}
            _pressed={{
              opacity: 0.5,
            }}
          >
            Let's play!
          </Button>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default PiecesModal;
