import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { t } from "react-native-tailwindcss";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

import { COLORS, images } from "../../../../constants";
import { Center, Box } from "native-base";

function ButtonGame({ onPress, text, lastPlayed, id }) {
  const [img, setImg] = useState("");
  useEffect(() => {
    axios
      .post("http://190.92.208.177:8000/tangram/get_puzzle_image", {
        puzzle_id: id,
      })
      .then((r) => {
        setImg(r.data.image);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: "#F6F6F6" }]}
      onPress={onPress}
    >
      <Center>
        <Center style={[t.w1_6, t._mL2]}>
          <Image
            style={{
              width: 100,
              height: 100,
              marginBottom: 10,
            }}
            source={{ uri: `data:image/jpeg;base64,${img}` }}
          />

          {/* <Icon name="gamepad" size={20} color="#9999aa" /> */}
        </Center>

        <Box display="flex" flexDir="row" alignItems="flex-end">
          <View style={[t.justifyStart, t.w4_6, t.mR8]}>
            <Text style={[styles.text1, { color: COLORS.darkgray }]}>
              {text}
            </Text>
            <Text style={[styles.text2, { color: COLORS.darkgray }]}>
              {lastPlayed.toDateString()}
            </Text>
          </View>

          <Ionicons name="chevron-forward-outline" size={20} color="#9999aa" />
        </Box>
      </Center>
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
    // fontFamily: "Poppins-Bold",
    fontWeight: 600,
    textDecorationLine: "underline",
  },
  text2: {
    fontFamily: "Poppins-Regular",
    fontWeight: 300,
  },
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    alignItems: "center",
    width: Dimensions.get("window").width / 2 - 30,
    padding: 20,
    marginBottom: 20,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { height: 0, width: 0 },
  },
});

export default ButtonGame;
