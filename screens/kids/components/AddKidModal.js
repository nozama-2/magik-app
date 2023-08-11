import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import uuid from "react-native-uuid";

import { COLORS } from "../../../constants";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Center,
  FormControl,
  Input,
  Slider,
  Text,
} from "native-base";
import { useDispatch, useStore } from "react-redux";

function AddKidScreen({ navigation, route }) {
  const p = route.params || {};

  const dispatch = useDispatch();
  const store = useStore();
  const info2 = store.getState().children[p.id];

  const id = p.id || uuid.v4();

  const [info, setInfo] = useState(
    info2
      ? { ...info2, age: String(info2.age) }
      : {
          name: "",
          age: "",
          limit: 30,
          img: "",
        }
  );

  const getInitials = (name) => {
    let n = name.split(" ");
    let i = n.map((w) => w[0]);
    return i.join("").toUpperCase();
  };

  const handleSave = () => {
    // TODO: actually add the kid
    dispatch({ type: "setChild", child: info, id });
    navigation.goBack();
  };

  const handleDelete = () => {
    // TODO: actually delete the kid
    dispatch({ type: "removeChild", id });
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: "column", justifyContent: "flex-start" }}
    >
      <Box h="90%" p={30}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Center>
            <Avatar
              size="2xl"
              source={{
                uri: info.img,
              }}
            >
              {info.name ? getInitials(info.name) : "?"}
            </Avatar>
            <Box
              backgroundColor={COLORS.lightGray}
              position="absolute"
              bottom="-10px"
              pl="10px"
              pr="10px"
              borderRadius={5}
              zIndex={3}
            >
              Edit image
            </Box>
          </Center>

          <FormControl>
            <Box mb={5}>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                size="md"
                placeholder="Enter name"
                variant="underlined"
                value={info["name"]}
                onChangeText={(text) => setInfo({ ...info, name: text })}
              />
            </Box>

            <Box mb={5}>
              <FormControl.Label>Age</FormControl.Label>
              <Input
                size="md"
                placeholder="Enter age"
                variant="underlined"
                value={info["age"]}
                onChangeText={(text) => {
                  const t = text.replace(/[^0-9]/g, "");
                  if (!isNaN(t)) {
                    setInfo({ ...info, age: t });
                  }
                }}
              />
            </Box>

            <Box mb={5}>
              <FormControl.Label>Screen time limit</FormControl.Label>

              <Box flexDir="row" justifyContent="space-between">
                <Box>
                  <Text underline fontSize="15px">
                    {info["limit"]} mins
                  </Text>
                </Box>
                <Box w="75%">
                  <Slider
                    w="100%"
                    value={info["limit"]}
                    minValue={10}
                    maxValue={240}
                    accessibilityLabel="ScreenTime"
                    step={5}
                    onChange={(v) => {
                      setInfo({ ...info, limit: v });
                    }}
                    colorScheme="gray"
                  >
                    <Slider.Track>
                      <Slider.FilledTrack backgroundColor={COLORS.primary} />
                    </Slider.Track>
                    <Slider.Thumb backgroundColor={COLORS.primary} />
                  </Slider>
                  <Text position="absolute" top="20px" color={COLORS.gray}>
                    10mins
                  </Text>
                  <Text
                    position="absolute"
                    top="20px"
                    right="0px"
                    color={COLORS.gray}
                  >
                    240mins
                  </Text>
                </Box>
              </Box>
            </Box>
          </FormControl>
        </ScrollView>
        <Divider mb={3} />
        <Flex flexDir="row" justifyContent="space-between">
          <Button
            w="48%"
            backgroundColor={COLORS.darkgray}
            onPress={() => {
              navigation.goBack();
            }}
          >
            Cancel
          </Button>
          <Button
            isDisabled={info["name"] == "" || info["age"] == -1}
            w="48%"
            backgroundColor={COLORS.green}
            onPress={handleSave}
          >
            Save
          </Button>
        </Flex>
        {p.id && (
          <Button
            width="100%"
            mt={3}
            backgroundColor={COLORS.primary}
            onPress={handleDelete}
          >
            Delete Kid
          </Button>
        )}
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 25,
    paddingBottom: 150,
  },
  header: {
    fontFamily: "Poppins-Bold",
    fontWeight: 800,
    fontSize: 26,
  },
  infoParagraph: {
    fontFamily: "Poppins-Regular",
    margin: 25,
    fontSize: 16,
  },
});

export default AddKidScreen;
