import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { t } from "react-native-tailwindcss";
import Icon from "react-native-vector-icons/FontAwesome";
import { Divider, Box, Center, Flex } from "native-base";
import { useSelector, useStore } from "react-redux";

import { COLORS } from "../../constants/theme";
import KidCardsDisplay from "./components/KidCardsDisplay";

const KidsScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={[t.flex, t.flexCol]}>
        <Box mb={4}>
          <Text style={[styles.title]}>My Kids</Text>
        </Box>

        <KidCardsDisplay navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 35,
    fontWeight: 800,
    alignSelf: "flex-start",
    color: COLORS.black,
    paddingLeft: 20,
    paddingTop: 30,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    alignSelf: "center",
  },
});

export default KidsScreen;
