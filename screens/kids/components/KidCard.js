import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { VStack, Box, Divider, Center, Avatar, Text, Flex } from "native-base";
import { COLORS } from "../../../constants";
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
      marginBottom={5}
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
            <Flex h={60} justifyContent="center">
              <Text style={styles.nameText} fontSize="xl">
                {c.name}
              </Text>
            </Flex>

            <Text style={styles.ageText} fontSize="sm">{c.age} years old</Text>
            <Text style={styles.limitText} fontSize="sm">Limit: {c.limit} mins</Text>
          </Box>

          <TouchableOpacity
            style={styles.editKidButton}
            onPress={() => {
              navigation.push("Add kid", {
                id,
              });
            }}
          >
              <Text style={styles.editKidText}>
                Edit
              </Text>
          </TouchableOpacity>
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
              backgroundColor={COLORS.green}
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

const styles = StyleSheet.create({
  nameText: {
    fontFamily: "Poppins-Bold",
    fontWeight: 700,
    textAlign: 'center',
  },
  ageText: {
    fontFamily: "Poppins-Regular",
    fontWeight: 400,
    textAlign: 'center',
  },
  limitText: {
    fontFamily: "Poppins-Regular",
    fontWeight: 400,
    textAlign: 'center',
  },
  editKidButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 5,
    marginBottom: 10
  },
  editKidText: {
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: "Poppins-Bold",
    fontWeight: 600,
  }
})
export default KidCard;
