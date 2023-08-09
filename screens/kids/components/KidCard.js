import React from "react";
import { VStack, Box, Divider, Center, Avatar, Text, Flex } from "native-base";
import { COLORS } from "../../../constants/theme";
import Icon from "react-native-vector-icons/FontAwesome";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";

let KidCard = ({ id, isNormalCard, isPaddingCard, navigation }) => {
  const c = useSelector((x) => x.children[id]);

  const getInitials = (name) => {
    let n = name.split(" ");
    let i = n.map((w) => w[0]);
    return i.join("").toUpperCase();
  };

  return !isPaddingCard ? (
    <Box
      backgroundColor={!isNormalCard ? "transparent" : COLORS.white}
      width={170}
      height={290}
      borderRadius="xl"
      margin="1"
      shadow={!isNormalCard ? "2" : 0}
      padding={3}
      pb={5}
    >
      {isNormalCard ? (
        <VStack space="3">
          <Center pt={2} shadow={2}>
            <Avatar
              size={100}
              source={{
                uri: c.img,
              }}
              backgroundColor={COLORS.secondary}
              mb={0}
            >
              {getInitials(c.name)}
            </Avatar>
          </Center>

          <Box px="2" mb="0">
            <Flex h={60} justifyContent="center" alignItems="left">
              <Text bold fontSize="xl">
                {c.name}
              </Text>
            </Flex>

            <Text fontSize="sm">Age: {c.age} </Text>
            <Text fontSize="sm">Limit: {c.limit}mins </Text>
          </Box>

          <Pressable
            onPress={() => {
              navigation.push("Add kid", {
                id,
              });
            }}
          >
            <Box px={2}>
              <Text underline color={COLORS.darkgray}>
                Edit child
              </Text>
            </Box>
          </Pressable>
        </VStack>
      ) : (
        <Pressable
          onPress={() => {
            navigation.push("Add kid");
          }}
        >
          <Flex height="100%" justifyContent="center" alignItems="center">
            <Flex
              width={70}
              height={70}
              borderRadius={50}
              justifyContent="center"
              alignItems="center"
              backgroundColor={COLORS.primary}
            >
              <Icon name="plus" color={COLORS.white} size={25} />
            </Flex>
          </Flex>
        </Pressable>
      )}
    </Box>
  ) : (
    <Box width={170} borderRadius="md" margin="1" padding={3} pb={5}></Box>
  );
};

export default KidCard;
