import React from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { t } from "react-native-tailwindcss";

import GameCard from "./GameCard";

const GamesView = ({ navigation, route, games }) => {
  const splitIntoTwo = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length - 1; i += 2) {
      newArray.push([array[i], array[i + 1]]);
    }
    return newArray;
  };
  return (
    <>
      {splitIntoTwo(games).map((element) => (
        <View style={[t.flex1, t.flexRow, t.justifyBetween]}>
          <GameCard {...element[0]} route={route} navigation={navigation} />
          <GameCard {...element[1]} route={route} navigation={navigation} />
        </View>
      ))}
      {games.length % 2 ? (
        <View style={[t.flex1, t.flexRow, t.justifyBetween]}>
          <GameCard {...games[0]} route={route} navigation={navigation} />
          <View
            style={{
              alignItems: "center",
              width: Dimensions.get("window").width / 2 - 50,
              margin: 10,
              marginTop: 30,
            }}
          ></View>
        </View>
      ) : (
        <View></View>
      )}
    </>
  );
};

export default GamesView;
