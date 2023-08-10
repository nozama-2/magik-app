import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { Center, Box, Avatar, useDisclose, Text } from "native-base";
import { t } from "react-native-tailwindcss";

import SearchBar from "./components/SearchBar";
import DailyChallenge from "./components/DailyChallenge";
import GamesView from "./components/GamesView";
import { useSelector, useStore } from "react-redux";
import { COLORS } from "../../constants/theme";
import ProfileActionsheet from "./components/ProfileActionsheet";
import FilterButton from "../home/components/FilterButton";

const challengesCompleted = 1;
const totalChallenges = 3;

const GamesScreen = ({ route, navigation }) => {
  const getInitials = (name) => {
    let n = name.split(" ");
    let i = n.map((w) => w[0]);
    return i.join("").toUpperCase();
  };

  const profiles = { ...useStore().getState().children };

  const profileArr = Object.keys(profiles).map((x) => ({
    ...profiles[x],
    id: x,
  }));

  const { isOpen, onOpen, onClose } = useDisclose();
  const [selectedProfile, setSelectedProfile] = useState(profileArr[0]);

  useEffect(() => {
    console.log(profiles[selectedProfile["id"]]["img"]);
  }, [selectedProfile]);

  return (
    <SafeAreaView>
      <Box>
        {/* Dropdown to select profile */}
        <ProfileActionsheet
          isOpen={isOpen}
          onClose={onClose}
          selectedProfile={selectedProfile}
          profileArr={profileArr}
          setSelectedProfile={setSelectedProfile}
        />

        {/* Top bar */}
        <Box
          w="100%"
          pt="20px"
          px="30px"
          display="flex"
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <FilterButton
            onPress={() => {
              navigation.navigate("Filter Games", { id: selectedProfile.id });
            }}
          />
          <Text fontFamily="Poppins-Bold" fontSize={26}>
            Games
          </Text>
          <TouchableOpacity onPress={onOpen}>
            {profiles[selectedProfile["id"]]["img"] ? (
              <Avatar
                size="40px"
                source={{ uri: profiles[selectedProfile["id"]]["img"] }}
              />
            ) : (
              <Avatar size="40px">{getInitials(selectedProfile.name)}</Avatar>
            )}
          </TouchableOpacity>
        </Box>

        {/* Content */}
        <View style={[t.p2, { display: "flex", alignItems: "center" }]}>
          <SearchBar />

          <Center w="100%" px={3}>
            {/* Daily challenge */}
            <DailyChallenge
              challengesCompleted={challengesCompleted}
              totalChallenges={totalChallenges}
            />

            {/* Collection of Games in the form of Cards in rows of 2 */}
            <GamesView
              navigation={navigation}
              route={route}
              selectedProfile={selectedProfile}
            />
          </Center>
        </View>
      </Box>
    </SafeAreaView>
  );
};

export default GamesScreen;
