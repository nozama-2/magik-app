import React, { Fragment, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { t } from "react-native-tailwindcss";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../../../../constants";

function ButtonGame({ onPress, text, lastPlayed }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: "#F6F6F6" }]}
      onPress={onPress}
    >
      <View style={[t.w1_6, t._mL2]}>
        <Icon name="gamepad" size={20} color="#9999aa" />
      </View>

      <View style={[t.justifyStart, t.w4_6, t.mR8]}>
        <Text style={[styles.text1, { color: COLORS.darkgray }]}>{text}</Text>
        <Text style={[styles.text2, { color: COLORS.darkgray }]}>
          Played: {lastPlayed.toDateString()}
        </Text>
      </View>

      <Ionicons name="chevron-forward-outline" size={20} color="#9999aa" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "Poppins-Bold",
  },
  iconColor: {
    color: "#888899",
  },
  text1: {
    fontFamily: "Poppins-SemiBold",
    fontWeight: 700,
  },
  text2: {
    fontFamily: "Poppins-SemiBold",
    fontWeight: 300,
  },
  container: {
    height: 54,
    flexDirection: "row",
    marginHorizontal: 10,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 0.5,
    borderRadius: 14,
    marginBottom: 5,
  },
});

export default ButtonGame;
