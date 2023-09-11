import React from "react";
import { Box, Button, Divider, HStack, Text } from "native-base";
import { Image, SafeAreaView } from "react-native";
import { COLORS } from "../../constants";
import { useDispatch, useStore } from "react-redux";
import icons from "../../constants/icons";

const GamePurchase = ({ route, navigation }) => {
  const mapGameImg = {
    tangram: icons.tangramIcon,
    "matching shapes": icons.shapesIcon,
    numbers: icons.numbersIcon,
    battleship: icons.battleshipIcon,
    codecars: icons.codecarsIcon,
  };

  const colorCatMap = {
    logic: COLORS.secondary,
    math: COLORS.peach,
    multi: COLORS.yellow,
  };

  const name = route.params.name;
  const { ageRangeEnd, ageRangeStart, category, price, info } = useStore()
    .getState()
    .games.filter((x) => x.name == name)[0];

  const dispatch = useDispatch();

  const handlePurchase = () => {
    dispatch({ type: "buyGame", name });
    navigation.navigate("Games");
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
        w="90%"
        borderRadius={20}
        px="10px"
        py="30px"
      >
        <Box
          pt={3}
          w="100%"
          display="flex"
          flexDir="row"
          h="200px"
          justifyContent="space-around"
          alignItems="flex-start"
        >
          {/* Icon */}
          <Box
            w="100px"
            h="100px"
            p={2}
            borderWidth={0.2}
            borderRadius={30}
            borderColor={COLORS.darkgray}
            backgroundColor={COLORS.lightGray}
          >
            <Image
              source={mapGameImg[name.toLowerCase()]}
              style={{
                width: "90%",
                height: "90%",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Info */}
          <Box justifyContent="flex-start" w="60%">
            <Text bold fontSize={30}>
              {name}
            </Text>

            <HStack>
              {/* Age badge */}
              <Box
                w="80px"
                h="30px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius={6}
                borderWidth={1}
                borderColor={COLORS.darkgray}
                backgroundColor={COLORS.lightGray2}
                opacity={0.7}
              >
                <Text fontSize="12px">
                  {ageRangeStart}-{ageRangeEnd} years
                </Text>
              </Box>

              {/* Category badge */}
              <Box
                borderRadius={10}
                backgroundColor={colorCatMap[category]}
                w="50px"
                h="30px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={1}
                ml={1}
              >
                <Text fontSize="12px" color={COLORS.white}>
                  {category}
                </Text>
              </Box>
            </HStack>

            {/* Description */}
            <Text w="100%">{info}</Text>
          </Box>
        </Box>

        <Divider mb={4} />

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
            onPress={handlePurchase}
            _pressed={{
              opacity: 0.5,
            }}
          >
            <Text bold color={COLORS.white}>
              Buy ${price}
            </Text>
          </Button>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default GamePurchase;
