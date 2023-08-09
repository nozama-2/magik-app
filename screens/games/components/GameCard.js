import React from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, icons, images } from "../../../constants";
import { t } from "react-native-tailwindcss";

const GameCard = ({ name, imageUrl, info, themeColor, route, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push(name)}
    >
      {/* Action Button: Information buton to teach the player how to play the game */}
      <View style={[t.flex1, t.flexRow, t.selfEnd, t.mT1, t.mR2]}>
        <TouchableOpacity
          onPress={() =>
            navigation.push("InfoModal", { name: name, info: info })
          }
        >
          <Image
            source={icons.infoIcon}
            resizeMode="contain"
            style={{
              marginTop: 0,
              alignSelf: "center",
              width: 25,
              height: 25,
              tintColor: COLORS.gray,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* The Main Game Image Thumbnail */}
      <Image
        source={require("../../../assets/images/games_images/tangram.png")}
        resizeMode="contain"
        style={{
          marginTop: 0,
          alignSelf: "center",
          width: 50,
          height: 50,
          // shadowOpacity: 0.3,
          // shadowRadius: 20,
          // shadowColor: COLORS.black,
          // shadowOffset: { height: 10, width: 0 }
        }}
      />

      {/* The Name of the game */}
      <Text style={styles.containerHeader}>{name}</Text>

      {/* PLAY BUTTON */}
      <View
        style={[
          styles.playButton,
          t.flex,
          t.justifyCenter,
          { backgroundColor: themeColor },
        ]}
      >
        <Image
          source={icons.playIcon}
          resizeMode="contain"
          style={{
            alignSelf: "center",
            width: 20,
            height: 20,
            tintColor: COLORS.white,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    alignItems: "center",
    width: Dimensions.get("window").width / 2 - 50,
    // margin: 10,
    marginTop: 30,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { height: 0, width: 0 },
  },
  containerHeader: {
    color: COLORS.black,
    marginVertical: 10,
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    fontWeight: 700,
  },
  playButton: {
    height: 40,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: "100%",
  },
});

export default GameCard;
